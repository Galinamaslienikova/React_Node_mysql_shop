import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "./addToCart";


export default function ProductsInCart({desc,user_id,rerender,inOrder}){
    return (
    <div  style={{
         width:'100%', 
            height:80,
            display:'flex',
            marginTop:40,
            marginBottom:20
            }}>
        <img style={{
        max_width:'100%', 
        display:'flex'
        }} alt='img' src={desc.Image} / >
        <div style={{
            display:'flex',
            flex_direction:'row'
            }}> 
            <div >
                <h5 ><Link style={{textDecoration:'none'}}  className="link-secondary" to={`/product/${desc.id_t_shirts}`}>{desc.name}</Link></h5>
                <div style={{marginBottom:'25',display:inOrder&&'flex',flexDirection:inOrder&&'row'}}>
                <div style={{display:'flex',marginBottom:0}}>Сoстав: {desc.compose}, цвет: <p style={{width:20,height:20,background:desc.color_value,border:'solid 1px black',borderRadius:'50%'}}></p> , размер: {desc.size_value} , </div>
                <p >колличество:<span style={{marginRight:15,fontWeight:600}} > {desc.quantity} шт.</span>
                Итого : <span style={{fontWeight:600}} >{desc.quantity*desc.price} грн</span></p>
                </div>
                
            </div>
            {<div>
                {!inOrder&&<><button style={{marginRight:'5px'}} className='btn btn-secondary' onClick={(e)=>removeFromCart(e,user_id,rerender)} value={JSON.stringify({id_option:desc.id_option,id_t_shirt:desc.id_t_shirt})}   >-</button><button className='btn btn-secondary' value={JSON.stringify({id_option:desc.id_option,id_t_shirt:desc.id_t_shirt})} onClick={(e)=>addToCart(e,user_id,rerender)} >+</button></>}
            </div>
            }
            
            
        </div>
    </div> )}
