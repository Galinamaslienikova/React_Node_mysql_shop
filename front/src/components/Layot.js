import React from "react";
import { Link } from "react-router-dom";
import { getCategories,  getTypes } from "../api/api";
import { findCookie, findCookieValue } from "./cookies";
import { SmallCart } from "./SmallCart";
import Loader from '../components/Loader';
 class Layot extends React.Component{
    constructor(props){
        super(props)
        this.state={
            categories:[],
            username:'',
            user_id:'',
            types:[],
            loader:true
        }
    }
    exit=()=>{
        let value=findCookie('username')
        document.cookie = `username=${value};path=/; max-age=0`;
        this.setState({
            username:'',
            user_id:'',
           
            
        })
    }
    componentDidMount(){
        getCategories()
        .then(data=>this.setState({
            categories:data,
            loader:false
        }))
        getTypes()
        .then(data=>{
            this.setState({
            types:data
        })})
        let value=findCookieValue('username')
        if(value){
            this.setState({
                username:value.username,
                user_id:value.id_client
            })            
        }
       
    }
 
    render(){  
        let result
        let resultType
        if(!this.props.start){
        result=this.state.categories.map((item)=>{
          return <Link  onClick={this.props.onclick!==''&&this.props.onclick} id={item.id_category}  key={item.value} className=" navbar nav-link link-secondary" to={`/category/${item.id_category}/page1`}><h4 id={item.id_category}>{item.value}</h4></Link>
        })
        resultType=this.state.types.map((item,index)=>{
            return <Link  onClick={this.props.onclick!==''&&this.props.onclick} id={item.id_type}  key={item.type_value} className="navbar nav-link link-secondary" to={`/type/${item.id_type}/page1`}><h5 id={item.id_type}>{item.type_value}</h5></Link>
          })}
        return(
            <div >
                <div className="navbar  navbar-dark  bg-dark bg-gradient">
                    <div className='container'>
                    <div className="container-fluid">
                          {this.state.username===''?
                          <Link to='/login'> 
                            <button className="btn btn-outline-success" type="submit">Login/Registred</button>
                        </Link>:
                        <div  className=' row'>
                            <div style={{color:'white'}} className='col-9'><h3>Hello {this.state.username}!</h3>
                            <Link style={{textDecoration:'none'}} className=" link-secondary"  to={`/clientPage/${this.state.user_id}`}>Перейти в личный кабинет      </Link>
                            <button className='btn btn-secondary' onClick={this.exit}>выйти</button></div>
                           <div className='col-1'><Link to ={`/clientPage/${this.state.user_id}`}><SmallCart total={this.props.count} id_client={this.state.user_id&&this.state.user_id}/></Link>  </div>
                        </div>}  
                    </div>
                    </div>
               </div>
               
               {this.state.loader?<Loader/>:this.props.start?null:<>
               <div className="nav nav-pills nav-fill" >
                    {result}
                    </div>
                    <div style={{marginLeft:'25px'}} className="nav nav-pills nav-fill" >
                    {resultType}
            </div></>}
            <h1 className="text-center" > {this.props.pageName}</h1>
            {this.props.children}
            </div>
            
        )
    }
}
export default Layot