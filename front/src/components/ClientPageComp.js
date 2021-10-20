import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getUserOrders } from "../api/api"
import ProductsInCart from "./ProductsInCart"

 
 
 export default function ClientPageComp({order,client,exit,showCart,res,showOrder,user_id,rerender,show,orders}){
    const[ordersAll,setOrdersAll]=useState([])
    const[orderList,setOrderList]=useState(false)
   
    useEffect(()=>{
        getUserOrders(user_id)
        .then(data=>setOrdersAll(data))
    },[user_id])
    let total=0
    let resultList=ordersAll.map((int,index)=>{
      let time=new Date (Date.parse(int.create_date))
      return <li key={index}   className="list-group-item" >
              N<Link  to={`/clientPage/${user_id}/order/${int.id_order}`}>{int.id_order}</Link>,Способ доставки: {int.delivery},Способ оплаты: {int.payment_value},Статус заказа:{int.status_value},Дата заказа:{time.toLocaleDateString()}
            </li>
    })
    let result=res.map((int,index)=>{
      total=total+(int.quantity*int.price)
        return <ProductsInCart
        key={int.id_option}
        rerender={rerender}
        user_id={user_id}
        desc={int}/>
    })
    let allOrders=ordersAll.map((int,index)=>{
      let time=new Date (Date.parse(int.create_date))
      return <tr key={'K'+int.id_order} >
                <th scope="row"><Link  to={`/clientPage/${user_id}/order/${int.id_order}`}>{int.id_order}</Link></th>
                <td>{int.delivery}</td>
                <td>{int.payment_value}</td>
                <td>{int.status_value}</td>
                <td>{time.toLocaleDateString()}</td>
              </tr>
      
    })
     return(
          <div className='container '>
            {client.length===0?
           <div><Link to='/'><button style={{marginTop:'10px'}} className='btn btn-secondary' onClick={showOrder}>Вернуться в магазин</button></Link>
             <Link to='/login'><button style={{marginTop:'10px'}} className='btn btn-secondary' onClick={showOrder}>Войти в личный кабинет</button></Link>           
            </div>
            :
            <div className='row'>
              <div className='col-4'>
              <h1>Hello {client.username} <button className='btn btn-secondary' onClick={exit}>exit</button><br/> </h1> 
              <p>Адресс:{client.adress}</p>
              <p>Телефон:{client.phone}</p>
              <p>Email:{client.email}</p>
              
              <button style={{marginTop:'10px'}} className='btn btn-secondary' onClick={showCart}>Показать корзину</button><br/>
              <button style={{marginTop:'10px'}} className='btn btn-secondary' onClick={showOrder}>Показать мои заказы</button>{orders&&<span><span onClick={()=>setOrderList(true)}  role="button" className='link-success' style={{background:'grey',marginLeft:"15px",marginRight:'5px',borderRadius:'10%'}}> список </span><span onClick={()=>setOrderList(false)}  role="button" className='link-success' style={{background:'grey',borderRadius:'10%'}}> таблица </span></span>}<br/>
              <Link to='/page1'><button style={{marginTop:'10px'}} className='btn btn-secondary' onClick={showCart}>Продолжить покупки</button><br/></Link>
              </div>
              <div  className='col-6'>
              {show&&<><h3>Моя корзина</h3>{result.length>0?<>{result}<h5>Всего товаров на сумму: {total} грн</h5><Link to={`/clientPage/${user_id}/order`}><button  >Перейти к оформлению заказа</button></Link><Link to='/'><button>Продолжить покупки</button></Link></>:<p>Ваша корзина пуста :(</p>}</>}
                {orders&&
                <div>{orderList?
                  <ul className="list-group">
                    {resultList}
                  </ul>:
                <table className="table">
                    <thead>
                            <tr>
                            <th scope="col">Номеа заказа</th>
                            <th scope="col">Способ доставки</th>
                            <th scope="col">Способ оплаты</th>
                            <th scope="col">Статус заказа</th>
                            <th scope="col">Дата заказа</th>
                            </tr>
                    </thead>
                    <tbody>
                        {allOrders}
                    </tbody>
                </table>} 
                </div>
                }
                </div>
              </div>}   
          </div>        
     )
 }