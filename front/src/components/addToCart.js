import { getTotalFromCart, getUserFromCart} from "../api/api"


export function addToCart(e,user_id,rerender){
    let options=JSON.parse(e.target.value)
    getUserFromCart(user_id)
    .then(data=>{
        let a=true
        if(data.length>0){
         data.forEach((val)=>{
                if (val.id_option===options.id_option){
                    a=false
                  return fetch('/cartUpdate',{
                    method:"POST",
                    body:JSON.stringify(
                     {quantity:val.quantity*1+1,
                    id_client:user_id,
                    id_option:options.id_option}
                )
            })   }
        })
        a&&fetch('/cart',{
                method:"POST",
                body:JSON.stringify(
                        {id_client:user_id,
                        id_t_shirt:options.id_t_shirt,
                        id_option:options.id_option}
                )
            })
            if(rerender)rerender()
        }else{
            fetch('/cart',{
        method:"POST",
        body:JSON.stringify(
                {id_client:user_id,
                id_t_shirt:options.id_t_shirt,
                id_option:options.id_option}
        )
    })
    if(rerender)rerender() }

  })
  let a
  getTotalFromCart( user_id)
 .then(data=>  a=data)
 return a
}


export function removeFromCart(e,user_id,rerender){
    let options=JSON.parse(e.target.value)
    getUserFromCart(user_id)
    .then(data=>{
        if(data.length>0){
         data.forEach((val)=>{
                if (val.id_option===options.id_option){
                    if(val.quantity===1){
                      fetch('/remove',{
                        method:"POST",
                        body:JSON.stringify(
                        {id_client:user_id,
                        id_option:options.id_option})
                        })
                    }else fetch('/cartUpdate',{
                        method:"POST",
                        body:JSON.stringify(
                        {quantity:val.quantity*1-1,
                        id_client:user_id,
                        id_option:options.id_option}
                )
            }) }         
        })
            if(rerender)rerender()
        }

  })
 
}