import React from "react";
import { withRouter } from "react-router";
import { getClient, getProdVarInCarts } from "../../api/api";
import { findCookieValue } from "../../components/cookies";
import OrderDetails from "../../components/OrderDetails";
import ProductsInCart from "../../components/ProductsInCart";
import Modal from "../../components/Modal";



 class OrderMaker extends React.Component{

    constructor(props){
        super(props)
        this.state={
            client:[],
            list:[],
            details:[],
            payment:'2',
            modal:false
            
        }
    }
    nameVal=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
        })}
    componentDidMount(){
        this.firstLoad()
         
     }
     details(){
        let result=[]
        result=this.state.list.map((int)=>{
             return result.concat({id_option:int.id_option, quantity:int.quantity,id_t_shirts:int.id_t_shirts,price:int.price})
        })
        this.setState({
            details:result
        })
    }
    firstLoad(){
        getProdVarInCarts(this.props.match.params.id_client)
        .then(data=>
            {this.setState({
            list:data
            })
            data.forEach((int)=>{
                this.setState({details:this.state.details.concat({id_option:int.id_option, quantity:int.quantity,id_t_shirts:int.id_t_shirts,price:int.price})})
           })
    
        })
        let value=findCookieValue('username')
        if(value){
        getClient(this.props.match.params.id_client)
        .then(data=>{
            this.setState({
                client:data[0]
            })
        })}else{this.setState({modal:true})}
    }
    subOrder=(e)=>{
        fetch('/newOrder', {
            method: 'POST',
            body:JSON.stringify({username:this.state.client.id_client,payment:this.state.payment,details:this.state.details})
                })
                .then(response => {
                    if (!response.ok) {
                        console.log('ok')
                    }else{
                        this.setState({
                            modal:true
                        })
                    }
                })

        e.preventDefault()
    }
    render(){
        let result=this.state.list.map((int)=>{
            return <ProductsInCart
            key={int.id_option}
            inOrder='true'
            desc={int}/>
        })
        return(
            <div style={{height:'100vh'}} className='bg-secondary'>
            <div className='container '>
                <Modal home='true' visibility={this.state.modal?'visible':'hidden'}>
                    Спасибо за заказ. Наши операторы свяжутся с Вами в ближайшее время
                </Modal>
                <div  className="row bg-light">
                    <div style={{border:'solid grey'}} className="col-5">{result}</div>
                    <div style={{border:'solid grey'}} className="col-7">
                    <OrderDetails payment={this.state.payment} onchange={this.nameVal} subOrder={this.subOrder}  details={JSON.stringify(this.state.details)} client={this.state.client}/>
                    </div>
                </div>
            </div>
            </div>
           
        )
    }


}

export default withRouter(OrderMaker)