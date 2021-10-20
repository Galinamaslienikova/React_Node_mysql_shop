import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import {  getTypeName,getOneTypes,  getTypePages, getTypes, getTotalFromCart } from '../api/api';
import { withRouter } from 'react-router';
import { findCookieValue } from '../components/cookies';
import { Link } from 'react-router-dom';
import Pagination from '../components/Paginations';
import Layot from '../components/Layot';
import React from 'react';






class TypeProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryProducts: [],
            loader:true,
            catName:'',
            page:this.props.match.params.id*1,
            pages:0
        };
    }
    goToNewCat = (e) => {
        this.setState({
            loader:true,
        })
        getOneTypes(e.target.id)
        .then(data=>{
            this.setState({
                pages:Math.ceil(data.length/3),
                page:1
        })
        })
        getTypeName(e.target.id)
        .then(data=>{
            this.setState({
                catName:data[0].type_value
            })
        })
        getTypePages(e.target.id*1,0)
            .then(data => {
                this.setState({
                    loader:true,
                    categoryProducts: data
                })
                this.setState({
                    loader:false,
                })
            }
            );  
    }
    changePage=(e)=>{
        this.setState({
            loader:true
        })
           let n=parseInt(e.target.value)
           n===this.state.pages+1||
           getTypePages(this.props.match.params.categoryName,(e.target.value*1-1)+(e.target.value*1-1)*2)
        .then(data =>{
            this.setState({
                categoryProducts:data,
                page:this.props.match.params.id*1,
                loader:false
        })});
    }
    next=()=>{
       let counts=this.state.page
        this.setState({
            loader:true
        })
        getTypePages(this.props.match.params.categoryName,counts*1+counts*1*2)
        .then(data =>{
            this.setState({
                page:this.state.page*1+1,
                categoryProducts:data,
            loader:false
        })});
    }
    prev=()=>{
       let counts=this.state.page-2 
        this.setState({
            loader:true
        })
        if(counts>=0){
            getTypePages(this.props.match.params.categoryName,counts*1+counts*1*2)
        .then(data =>{
            this.setState({
                categoryProducts:data,
                loader:false,
                page:this.state.page*1-1
        })});
        }
        
    }
    componentDidMount() {  
        getTypes(this.props.match.params.categoryName)
        .then(data=>{
            this.setState({
                pages:Math.ceil(data.length/3)
        })
        })
        getTypePages (this.props.match.params.categoryName,this.props.match.params.id*1===1?0:this.props.match.params.id*1-1+this.props.match.params.id*1*2)
        .then(data => this.setState({
            loader:false,
            categoryProducts: data
        }));
        getTypeName(this.props.match.params.categoryName)
        .then(data=>{
            this.setState({
                catName:data[0].type_value
            })
        })
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
    render() {
        const result = this.state.categoryProducts.map((item)=> {
            return <ProductCard item={item} key={item.id_t_shirts} rerenderParent={this.rerender} />
        });
        return ( 
            <Layot count={this.state.totalInCart&&this.state.totalInCart[0].quantity} pageName={this.state.catName}   onclick={this.goToNewCat}>
                <Link  className="nav-link link-secondary" to='/page1'><button className='btn btn-secondary'>Вернутся на главную страницу</button></Link>
                {this.state.loader
                    ? <Loader/>
                    
                    : <div className='container'><div className="row row-cols-3 g-4" >{result}</div><Pagination  counts={this.state.page}
                    pages={this.state.pages}
                    changePage={this.changePage}
                    prev={this.prev}
                    next={this.next}
                    cat={true}
                    catName={this.props.match.params.categoryName}/></div>
                }
            </Layot>
        )
    }
}
export default withRouter(TypeProducts) ;