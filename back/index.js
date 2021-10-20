const express=require('express')
const cors=require('cors')
const {getTypeName,getTypes,getOneType,getOneTypes,getOneCategories, findUserOrder,findUserOrders,getAllTshirts,getAllTshirt, getTshirt, getCategories, getOneCategori,getCategoryToTshirt, getProductVariants, addToDetails, getUserFromCart, getTotalInCart, getProductDescribeInCart,getProductDescribeInCarts, getClient, getOneProdVar, getCategoryName}= require('./modules/products_moduls')
const { UserController } = require('./modules/user_moduls')
const bodyParser = require('body-parser');
const { Carts } = require('./modules/cart.moduls');


const server=express()
server.use(
    cors({
      origin: '*',
      credentials: true
    })
  );
server.use(bodyParser.urlencoded({extended:true}));
server.get('/catalog/:id',(req,res)=>{
    const page=req.params.id
    getAllTshirt(page,data=>{
    res.json(data.msg)
})})
server.get('/catalog',(req,res)=>{
    getAllTshirts(data=>{
    res.json(data.msg)
})})
server.get('/catalog/product/:id',(req,res)=>{
    const id=req.params.id
    getTshirt(id,data=>{
    res.json(data.msg)
})})
server.get('/categories',(req,res)=>{getCategories (data=>{
    res.json(data.msg)
})})
server.get('/categories/:id/:page',(req,res)=>{
    const page=req.params.page
    const id=req.params.id
   getOneCategori(id,page,data=>{
    res.json(data.msg)
})})
server.get('/categories/:id',(req,res)=>{
    const id=req.params.id
   getOneCategories(id,data=>{
    res.json(data.msg)
})})

server.get('/type',(req,res)=>{getTypes (data=>{
    res.json(data.msg)
})})
server.get('/type/:id/:page',(req,res)=>{
    const page=req.params.page
    const id=req.params.id
    getOneType(id,page,data=>{
    res.json(data.msg)
})})
server.get('/type/:id',(req,res)=>{
    const id=req.params.id
    getOneTypes(id,data=>{
    res.json(data.msg)
})})
server.get('/tepe/:id',(req,res)=>{
    const id=req.params.id
    getTypeName(id,data=>{
    res.json(data.msg)
})})

server.get('/thirtsCategory/:id',(req,res)=>{
    const id=req.params.id
    getCategoryToTshirt (id,data=>{
    res.json(data.msg)
})})
server.get('/variants/:id',(req,res)=>{
    const id=req.params.id
    getProductVariants (id,data=>{
    res.json(data.msg)
})})
server.get('/cartClient/:id',(req,res)=>{
    const id=req.params.id
    getUserFromCart (id,data=>{
    res.json(data.msg)
})})

server.get('/cartTotal/:id_client',(req,res)=>{
    const id=req.params.id_client
   getTotalInCart (id,data=>{
    res.json(data.msg)
})})

server.get('/productInCart/:id_client',(req,res)=>{
 
    const id_client=req.params.id_client
   
   getProductDescribeInCarts (id_client,data=>{
    res.json(data.msg)
})})
server.get('/client/:id_client',(req,res)=>{
 
    const id_client=req.params.id_client
   
   getClient(id_client,data=>{
    res.json(data.msg)
})})
server.get('/userOrders/:id_client',(req,res)=>{
    const id_client=req.params.id_client
    findUserOrders(id_client,data=>{
    res.json(data.msg)
})})
server.get('/userOrder/:id_client/:id_order',(req,res)=>{
    const id_client=req.params.id_client
    const id_order=req.params.id_order
    findUserOrder(id_client,id_order,data=>{
    res.json(data.msg)
})})
 server.get('/oneProduct/:id_product',(req,res)=>{
    const id_product=req.params.id_product
   getOneProdVar(id_product,data=>{
    res.json(data.msg)
})})
server.get('/cat/:id_category',(req,res)=>{
    const id=req.params.id_category
    getCategoryName (id,data=>{
    res.json(data.msg)
})})




server.use('/create',UserController.register1)
server.use('/login',UserController.login)
server.use('/cart',Carts.addToDetails)
server.use('/cartUpdate',Carts.updateCart)
server.use('/newOrder',UserController.newOrder1)
server.use('/remove', Carts.removeFromCart)

server.listen(4000,()=>{
    console.log("server started")
})