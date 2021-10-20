import React from 'react'
import { withRouter } from 'react-router';
import SingleProduct from '../components/SingleProduct';
import Layot from '../components/Layot';
import { getProduct, getProductVariants, getTotalFromCart } from '../api/api';
import { getCategoryToTshirt } from '../api/api';
import Modal from '../components/Modal';
import {  findCookieValue } from '../components/cookies';
import { addToCart } from '../components/addToCart';
import Loader from '../components/Loader'
import { Link } from 'react-router-dom';




class ProductDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
            categories:[],
            variants:[], 
            username:'',
            user_id:'',
            modal:false,
            modalSmall:false,
            loader:true,
            totalInCart:''
        };
    }
    firstLoad=()=>{
        getProduct (this.props.match.params.productId)
        .then(data => this.setState({
            product: data,
            loader:false
        }));
        getCategoryToTshirt(this.props.match.params.productId)
        .then(data => this.setState({
           categories: data
        }));
        getProductVariants(this.props.match.params.productId)
        .then(data => this.setState({
           variants: data
        }));
        let value=findCookieValue('username')
        if(value){
            this.setState({
                username:value.username,
                user_id:value.id_client
            })
            getTotalFromCart(value.id_client)
            .then(data=>this.setState({totalInCart:data}))
        }
    }
    componentDidMount() {
       this.firstLoad()
      
    }
    addToCart=(e)=>{
        let value=findCookieValue('username')
        if(!value){
            this.setState({
                username:'',
                user_id:'',
                modal:true
            })
        }else {
            addToCart(e,this.state.user_id)
            this.setState({
                modalSmall:true,
            })
        }
    }
    modalClose=()=>{
        this.setState({
            modal:false,
            modalSmall:false,
        })
        this.firstLoad()
    }
    render() {
        return (  
            <>
             
            <Layot count={this.state.totalInCart&&this.state.totalInCart[0].quantity}  pageName="Product Details">
           <Link  className="nav-link link-secondary" to='/page1'><button className='btn btn-secondary'>Вернутся магазин</button></Link>
                {this.state.product === null
                    ? <Loader/> :<div>
                   <Modal visibility={this.state.modal?'visible':'hidden'} onClose={this.modalClose}>Для того,чтоб сделать заказ,пожалуйста <Link to='/login'>войдите в личный кабинет</Link> </Modal>
                   <Modal onClose={this.modalClose} visibilitySmall={this.state.modalSmall?'visible':'hidden'}small='true' >Товар успешно добавлен в корзину</Modal>
                   <div className='container'> <SingleProduct  details oncklic={this.addToCart} variants={this.state.variants} cat={this.state.categories}  item={this.state.product[0]} /></div>
                    </div>
                }
            </Layot>
            </>
        )
    }
}

export default withRouter(ProductDetailsPage);