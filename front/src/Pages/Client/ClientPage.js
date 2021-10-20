import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import {  getClient, getProdVarInCarts } from "../../api/api";
import ClientPageComp from "../../components/ClientPageComp";
import { findCookie, findCookieValue } from "../../components/cookies";
import Modal from "../../components/Modal";


 class ClientPage extends  React.Component{
    constructor(props){
        super(props)
        this.state={
            client:[],
            list:[],
            showCart:true,
            modal:false,
          
        }
    }
    order=()=>{
        this.setState({toOrder:!this.state.toOrder})
    }
    showCart=()=>{
        this.setState({
            showCart:!this.state.showCart,
            showOrder:false
        })
    }
    firstLoad(){
        getProdVarInCarts(this.props.match.params.id_client)
        .then(data=>this.setState({
            list:data
        }))
        let value=findCookieValue('username')
        if(value){
        getClient(this.props.match.params.id_client)
        .then(data=>{
            this.setState({
                client:data[0]
            })
        })}else{this.setState({modal:true})}
    }
    componentDidMount(){
       this.firstLoad()
        
    }
    rerender=()=>{
        this.setState({list:[]})
        this.firstLoad()
   
    }
    modalClose=()=>{
        this.setState({
            modal:false,
        })
    }
    exit=()=>{
        let value=findCookie('username')
        document.cookie = `username=${value};path=/; max-age=0`;
        this.setState({
            client:[],
            list:[],
            modal:true,
           
        })
    }
    showOrders=()=>{
        this.setState({
            showCart:false,
            showOrder:!this.state.showOrder
        })

    }
    render(){        
        return(
            <div className='bg-light bg-gradient'>
                {this.state.modal?
                <div>
                    <Modal visibility='visible'  onClose={this.modalClose}>Пожалуйста, <Link to='/login'>войдите в личный кабинет</Link></Modal>
            
                </div>:
                    <ClientPageComp
                        order={this.order}
                         show={this.state.showCart} 
                         rerender={this.rerender} 
                         user_id={this.props.match.params.id_client} 
                         showOrder={this.showOrders} 
                         client={this.state.client} 
                         exit={this.exit} 
                         showCart={this.showCart} 
                         res={this.state.list}
                         orders={this.state.showOrder}/>
            } 
            </div>
         
        )
    }
}
export default withRouter(ClientPage)