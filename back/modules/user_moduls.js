const Database = require('./base');
const { deleteFromCart } = require('./products_moduls');

class UserModel {
  async findUserEmail(email,callback){
    try {
      const [userInfo] = await Database.promise().execute(
        'SELECT * FROM `client` WHERE email=?',
        [email]
      );
      if (userInfo.length === 0)return callback({ success: true, msg: 'Пользователь найден' });
      callback({ success: false,msg: userInfo[0] });
    } catch (error) {
     
      callback({ success: false, msg: JSON.stringify(error) });
    }
  }

  register(username, adress,phone,password,email,callback) {
   
      Database.query(
        "INSERT INTO client (id_client, username, adress, phone, password,email) VALUES (NULL, ?, ? ,?, ?,?) ",
        [username, adress, phone, password,email],
        result => {
          callback(result);
          }
      );
  };
  async loginPromised(email, password, callback) {
    try {
      const [userInfo] = await Database.promise().execute(
        'SELECT id_client,username FROM client WHERE email=? and password=?',
        [email, password]
      );
      if (userInfo.length === 0)
        return callback({ success: false, msg: 'Пользователь не найден' });
      callback({ success: true,msg: userInfo[0] });
    } catch (error) {
      
      callback({ success: false, msg: JSON.stringify(error) });
    }
  }
  newOrder(username,payment,details,callback){
  
    Database.query(
      `INSERT INTO orders (id_order, id_client, delivery, id_payment, id_status, create_date, details) VALUES (NULL, ?,'новая почта', ?, '2', NOW(), ?)`,
      [username,  payment, details],
      result => {
        callback(result);
        }
    );
  }

  
  
}

const UserModul= new UserModel();
class UserController {  
  login(request,response){
    let params
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString();
    });
    request.on('end', () => {
    params = JSON.parse(body);
    
    UserModul.loginPromised(params.email, params.password, result => {
      const { success, msg } = result;
      
      if (!success) {
     
      response.status(400).send('no');
      }else{
   
      response.cookie('username', msg, {
        httpOnly: false,
      });
     
     response.end('ok');  
    }
    });
});}
register1(request,response){
  let params
  let body = '';
  request.on('data', chunk => {
    body += chunk.toString();
  });
  request.on('end', () => {
  params = JSON.parse(body);

  UserModul.findUserEmail(params.email,result=>{
    const { success, msg } = result;
    
    if (!success) {
  
    response.status(400).send('no');
    }else{
   
    UserModul.register(params.username, params.password,params.adress,params. phone, params.email, result => {
      const { success, msg } = result;
    
      if (!success) {
      
      response.status(400).send('no');
      }else{
      
     response.end('ok');  
    }
    });  
  }
  })
})
  ;}
  
  
  newOrder1(request,response){
    let params
    let body = '';
    request.on('data', chunk => {
      body += chunk.toString();
    });
    request.on('end', () => {
    params = JSON.parse(body);
    UserModul.newOrder(params.username,params.payment,JSON.stringify(params.details), result => {
      
      const { success, msg } = result;
      if (!success) {
      response.status(400).send('no');
      }else{
      deleteFromCart(params.username,result=>{
        const { success, msg } = result;
        if (!success) {
        } else {
        }
      })
     
     response.end('ok');  
    }
    });
});
  }
}

exports.UserController = new UserController();

