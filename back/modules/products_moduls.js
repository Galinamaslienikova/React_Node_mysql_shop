const DataBase = require('./base');

class Tshirts {
  getAllTshirt(page,callback) {
    DataBase.query('SELECT * FROM `t_shirts` ORDER BY id_t_shirt DESC LIMIT ?, 3',[page], results => {
      callback(results);
    });
  }
  getAllTshirts(callback) {
    DataBase.query('SELECT * FROM `t_shirts` ', results => {
      callback(results);
    });
  }

  getTshirt(id_t_shirts, callback) {
    DataBase.query('SELECT * FROM `t_shirts` WHERE id_t_shirt=?', [id_t_shirts], results => {
      callback(results);
    });
  }
  getCategories(callback){
    DataBase.query('SELECT * FROM categoties', results => {
      callback(results);
    });
    
  }
  getOneCategori(id_category,page,callback){
    DataBase.query('SELECT * FROM t_shirts JOIN categories_to_t_shirts ON t_shirts.id_t_shirt = categories_to_t_shirts.id_t_shirts where categories_to_t_shirts.id_category=? ORDER BY id_t_shirt DESC LIMIT ?, 3',[id_category,page], results => {
      callback(results);
    });
    
  }
 
  
  getOneCategories(id_category,callback){
    DataBase.query('SELECT * FROM t_shirts JOIN categories_to_t_shirts ON t_shirts.id_t_shirt = categories_to_t_shirts.id_t_shirts where categories_to_t_shirts.id_category=? ',[id_category], results => {
      callback(results);
    });
    
  }
  getTypes(callback){
    DataBase.query('SELECT * FROM type', results => {
      callback(results);
    });
    
  }
  getOneType(id_type,page,callback){
  
    DataBase.query('SELECT * FROM t_shirts JOIN product_option ON t_shirts.id_t_shirt = product_option.id_t_shirts where product_option.id_type=? ORDER BY id_t_shirt DESC LIMIT ?, 3',[id_type,page], results => {
      callback(results);
    });
    
  }
 
  getOneTypes(id_type,callback){
    DataBase.query('SELECT * FROM product_option where id_type=? ',[id_type], results => {
      callback(results);
    });
    
  }
  getTypeName(id_type,callback){
    DataBase.query('SELECT * FROM type where id_type=? ',[id_type], results => {
      callback(results);
    });
    
  }
  getCategoryToTshirt(id_t_shirts, callback){
    DataBase.query('SELECT categoties.id_category, categoties.value FROM categoties JOIN categories_to_t_shirts ON categoties.id_category = categories_to_t_shirts.id_category where categories_to_t_shirts.id_t_shirts=?',[id_t_shirts], results => {
    callback(results);
  });
  }
  getProductVariants(id_t_shirts, callback){
    DataBase.query('SELECT product_option.id_option, product_option.id_t_shirts, color.color_value,type.type_value,size.size_value from product_option,color,size,type where product_option.id_color=color.id_color and product_option.id_type=type.id_type and product_option.id_size=size.id_size and product_option.id_t_shirts=?',[id_t_shirts], results => {
      callback(results);
    }); 
  }

 addToCart(id_client, id_t_shirt, quantity, id_option,callback){
   DataBase.query(
     'INSERT INTO cart (id_cart, id_client, id_t_shirt, quantity, id_option) VALUES  (?, ?, ?, ?, ?)',
     [id_client,id_client, id_t_shirt, quantity, id_option],results => {
    callback(results);
  }); 
 }

 getUserFromCart(id_client,callback){
   DataBase.query('SELECT * FROM `cart` WHERE id_client=? ',[id_client],results => {
    callback(results);
  })
 }
 updateCart(quantity,id_client,id_option,callback){
   
   DataBase.query('  UPDATE `cart` SET `quantity`=? WHERE id_client=? and id_option=?',[quantity,id_client,id_option],results => {
    callback(results);
    })
  }
  removeFromCart(id_client,id_option,callback){
    DataBase.query(
      "DELETE FROM `cart` WHERE id_client=? and id_option=? ",
      [id_client,id_option],
      result => {
        callback(result);
        }
    );
  }
getTotalInCart(id_client,callback){
  DataBase.query('SELECT SUM(quantity) AS quantity FROM `cart` WHERE id_client=?',[id_client],results => {
    callback(results);
  })
}
getProductDescribeInCart(id_option,callback){
  DataBase.query("SELECT t_shirts.Image, t_shirts.name,t_shirts.t_shirt_compose,t_shirts.price, color.color_value,type.type_value,size.size_value FROM t_shirts,color,type,size,product_option WHERE product_option.id_color=color.id_color and product_option.id_type=type.id_type and product_option.id_size=size.id_size and product_option.id_t_shirts=t_shirts.id_t_shirt and product_option.id_option=?",[id_option],results => {
    callback(results);
  })
}
getProductDescribeInCarts(id_client,callback){
  DataBase.query("SELECT product_option.id_t_shirts, product_option.id_option, cart.quantity, t_shirts.Image, t_shirts.name,t_shirts.t_shirt_compose,t_shirts.price, color.color_value,type.type_value,size.size_value FROM cart,t_shirts,color,type,size,product_option WHERE product_option.id_color=color.id_color and product_option.id_type=type.id_type and product_option.id_size=size.id_size and product_option.id_t_shirts=t_shirts.id_t_shirt and cart.id_option=product_option.id_option and cart.id_client=?",[id_client],results => {
    callback(results);
  })
}
getClient(id_client,callback){
  DataBase.query('SELECT * FROM `client` WHERE id_client=?', [id_client],results => {
    callback(results);
  });
}
deleteFromCart(id_client,callback){
  DataBase.query('DELETE FROM `cart` WHERE id_client=?',[id_client],results=>{
    callback(results);
  })
}
getOneProdVar(id_product,callback){
 
  DataBase.query('SELECT t_shirts.name,t_shirts.t_shirt_compose, t_shirts.Image, product_option.id_option, product_option.id_t_shirts, color.color_value,type.type_value,size.size_value from product_option,color,size,type,t_shirts where product_option.id_color=color.id_color and product_option.id_type=type.id_type and product_option.id_size=size.id_size and product_option.id_option=? and product_option.id_t_shirts=t_shirts.id_t_shirt',[id_product],results=>{
    callback(results);
  })
}
findUserOrders(username,callback){
  DataBase.query(
    "SELECT orders.id_order,orders.delivery,orders.create_date,orders.details,payments.payment_value,order_status.status_value FROM orders,payments,order_status WHERE orders.id_status=order_status.id_status and orders.id_payment=payments.id_payment and orders.id_client=? ORDER BY id_order ASC ",
    [username],
    result => {
      callback(result);
      }
  );
}
findUserOrder(username,id_order,callback){
  DataBase.query(
    "SELECT orders.id_order,orders.delivery,orders.create_date,orders.details,payments.payment_value,order_status.status_value FROM orders,payments,order_status WHERE orders.id_status=order_status.id_status and orders.id_payment=payments.id_payment and orders.id_client=? and orders.id_order=?  ",
    [username,id_order],
    result => {
      callback(result);
      }
  );
}
getCategoryName(id_category,callback){
  DataBase.query('SELECT * FROM `categoties` WHERE id_category=?',[id_category],results => {
   callback(results);
 })
}

}

module.exports = new Tshirts();
