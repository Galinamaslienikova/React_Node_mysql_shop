import React from 'react'
import { Link } from 'react-router-dom'



export default function ProductCard({ item }) {
    return (
        <div className="col">
            <div className="card h-100">
                <Link to={`/product/${item.id_t_shirt}`}>
                    <img className="card-img-top" alt='img' src={item.Image} style={{ height: 200 }} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link style={{textDecoration:'none'}}  className="link-secondary" to={`/product/${item.id_t_shirt}`}>{item.name}</Link>
                    </h5>
                    <p>Состав: {item.t_shirt_compose} </p>
                    <p>Цена: {item.price} грн</p>
                    <Link to={`/product/${item.id_t_shirt}`}><button className="btn btn-dark" >Чтобы купить футболку выберите варианты</button></Link>
                </div>
            </div>
        </div>
    )
}
