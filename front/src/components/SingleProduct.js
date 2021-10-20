import React from 'react'
import { Link } from 'react-router-dom'



export default function SingleProduct({ item, cat,variants,oncklic }) {
   

    let res=cat.map((val,index)=>{
        return <Link style={{textDecoration:'none'}}  className="link-secondary" to={`/category/${val.id_category}`} key={index}>{val.value},  </Link>
    })
    let varian=variants.map((int)=>{
        return <div style={{display:'flex',flexDirection:'row',verticalAlign:'center'}} key={int.id_option}>
            <h5>Цвет:</h5>
            <p style={{width:25,height:25,background:int.color_value,border:'solid 1px black'}}></p> 
            <h5>, тип: {int.type_value}, размер: {int.size_value} </h5>
            <button className='btn btn-secondary' value={JSON.stringify({id_option:int.id_option,id_t_shirt:int.id_t_shirts})} onClick={oncklic} >Add to cart</button>
         </div>
    })

    return (
        <div className="row">
            <div className="col-3">
                <img alt='img' className="card-img-top" src={item.Image} style={{ height: 200 }} />
            </div>
            <div className="col-9">
                <h5 className="card-title">{item.name}</h5>
                <p>Категория: {res} </p>
                <p>Цена: {item.price} грн </p>
                <h5>Состав: {item.t_shirt_compose}</h5>
                <div>{varian}</div>
            </div>
        </div>
    )
}
