const {getTotalInCart,removeFromCart,  addToCart, updateCart } = require("./products_moduls");


class Cart{
    addToDetails(request,response){
        let params
        let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        params = JSON.parse(body);

        addToCart(params.id_client,params.id_t_shirt,1,params.id_option,result => {     
            const { success, msg } = result;
                if (!success) {
                } 
          })
        response.end('ok');
    });
    
}
updateCart(request,response){
    let params
    let body = '';
request.on('data', chunk => {
    body += chunk.toString();
});
request.on('end', () => {
    params = JSON.parse(body);

   updateCart(params.quantity,params.id_client,params.id_option,result => {     
        const { success, msg } = result;
            if (!success) {
              
            } 
      })
    response.end('ok');
});

}
removeFromCart(request,response){
    let params
    let body = '';
request.on('data', chunk => {
    body += chunk.toString();
});
request.on('end', () => {
    params = JSON.parse(body);
   removeFromCart(params.id_client,params.id_option,result => {     
        const { success, msg } = result;
            if (!success) {
              console.log(msg)
            } 
      })
    response.end('ok');
});

}
}
exports.Carts=new Cart