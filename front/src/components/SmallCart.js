
import image from '../img/cart.png'

export function SmallCart({id_client,total}){
    
   
    return(
        <div style={{position:'relative'}} className='col'>
            <p style={{position:'absolute',left:'60px',borderRadius:'50%',background:'blue',width:'25px',textAlign:'center',fontWeight:'600',color:'black'}}>{total}</p>
            <img src={image} alt='cart'/> 
        </div>
    )
}