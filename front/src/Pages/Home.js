
import React from 'react';
import { getAllProduct, getAllProducts, getTotalFromCart } from '../api/api';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import Layot from '../components/Layot';
import { findCookieValue } from '../components/cookies';
import Pagination from '../components/Paginations';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';



class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            products:[],
            loader:true,
            totalInCart:'',
            page:this.props.match.params.id*1,
            pages:0
        }
    
    }
    changePage=(e)=>{
        this.setState({
            loader:true
        })
           let n=parseInt(e.target.value)
           n===this.state.pages+1||
           getAllProducts((e.target.value*1-1)+(e.target.value*1-1)*2)
        .then(data =>{
            this.setState({
                products:data,
                page:this.props.match.params.id*1,
                loader:false
        })});
    }
    next=()=>{
       let counts=this.state.page
        console.log(this.state.page)
        this.setState({
            loader:true
        })
        getAllProducts(counts*1+counts*1*2)
        .then(data =>{
            this.setState({
                page:this.state.page*1+1,
                products:data,
            loader:false
        })});
    }
    prev=()=>{
       let counts=this.state.page-2 
       console.log(counts)
        this.setState({
            loader:true
        })
        if(counts>=0){
            getAllProducts(counts*1+counts*1*2)
        .then(data =>{
            this.setState({
                products:data,
                loader:false,
                page:this.state.page*1-1
        })});
        }
        
    }
    componentDidMount(){
        getAllProduct()
        .then(data=>{
            this.setState({
                pages:Math.ceil(data.length/3)
        })
        })
        getAllProducts(this.props.match.params.id*1===1?0:this.props.match.params.id*1-1+this.props.match.params.id*1*2)
        .then(data=>this.setState({
            products:data,
            loader:false

        }))
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
    
    render(){
        
          
        let result=this.state.products.map((item)=>{
          return  <ProductCard key={item.id_t_shirt} item={item}/>
        })
        return(
            <div >
                <Layot count={this.state.totalInCart&&this.state.totalInCart[0].quantity} pageName='Welcom:)'/>
                <div className='bg-light bg-gradient'>
                <div className='container '>
                <Link to='/'><button className="btn btn-outline-success">Вернутся на главную</button></Link>
                <div className='row row-cols-3 g-4 '>
                   {this.state.loader?<Loader/>:result }</div></div>
                </div>
                {this.state.loader?<Loader/>:
                <Pagination
                 counts={this.state.page}
                 pages={this.state.pages}
                 changePage={this.changePage}
                 prev={this.prev}
                 next={this.next}
                />}
            </div>
               
            
        )
    }
}
export default withRouter(Home)