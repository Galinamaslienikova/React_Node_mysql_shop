import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { getOneProduct, getUserOrder } from "../../api/api";
import ProductsInCart from "../../components/ProductsInCart";


class ClientOrder extends  React.Component{
    constructor(props){
        super(props)
        this.state={
            order:[],
            details:false
        }
    }
    componentDidMount(){
        getUserOrder(this.props.match.params.id_client,this.props.match.params.id_order)
        .then(data=>{
            this.setState({
                details:data
            })
            JSON.parse(data[0].details).forEach((int)=>{
                let i=int.id_option
                getOneProduct(i)
                .then(data=>{
                    this.setState({
                        order:this.state.order.concat({
                            id_t_shirts:data[0].id_t_shirts,
                            Image:data[0].Image,
                            price:int.price,
                            quantity:int.quantity,
                            name:data[0].name,
                            color_value:data[0].color_value,
                            compose:data[0].t_shirt_compose,
                            size_value:data[0].size_value
                        })
                    })
                })
            })
        })
    }

    render(){
        let sum=0
        let result=this.state.order.map((int,index)=>{
            sum=int.quantity*int.price+sum
            return  <ProductsInCart key={index}
            desc={int}
           inOrder='true'
            />
        })
        return(
            <div style={{height:'100vh'}} className='bg-secondary'>
            <div className='container bg-light'  style={{padding:15}}>
                <Link to={`/clientPage/${this.props.match.params.id_client}`}><button className='btn btn-secondary' >Вернуться в личный кабинет</button></Link> <Link to='/'><button className='btn btn-secondary'>Начать покупки</button></Link>
                <h4>Заказ N: {this.props.match.params.id_order} на сумму:{sum} грн  </h4>
               {result}
               
            </div>
            </div>
        )
    }
}
export default withRouter(ClientOrder)
