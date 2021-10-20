import React from "react";
import LoginCreate from "../components/LoginCreate";
import { validate, validateLength } from "../components/vali";
import Modal from '../components/Modal';
import { findCookieValue } from "../components/cookies";
import { Link } from "react-router-dom";


export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loginUsername:'',
            login:true,
            user_id:'',
            username:'',
            password:'',
            email:'', 
            modal:false,
            bigModal:false
        }
    }
    loginOnSub=(e)=>{
        fetch('/login', {
    method: 'POST',
    body:JSON.stringify({email:this.state.email,password:this.state.password})
        })
        .then(response => {
            if (!response.ok) {
                this.setState({modal:true})
            }else{
                let value=findCookieValue('username')
                if(value){
                    this.setState({
                        loginUsername:value.username,
                        bigModal:true
                    })
                }
            }
        })
        e.preventDefault()
    }
    nameVal=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
        })
        e.target.name==='email'&&validate(e.target.value,/\b[a-zA-Z0-9._]+@[a-z0-9.-]+[.][a-z]{2,4}\b/,e.target)
        e.target.name==='password'&&validateLength(e.target.value,7,e.target)
    }
   
    modalClose=()=>{
        this.setState({
            modal:false,
        })
    }
    render(){
        return(
            <div className='container'>
                {this.state.bigModal&&<Modal home='true' visibility={this.state.bigModal?'visible':'hidden'}>Вы вошли, как {this.state.loginUsername}</Modal>}
                {this.state.modal&&<Modal onClose={this.modalClose} visibilitySmall={this.state.modal?'visible':'hidden'}small='true'>Пользователь с таким именем не найден</Modal>}
                 <LoginCreate loginOnSub={this.loginOnSub} onSub={this.onSub} nameVal={this.nameVal}  login={this.state.login}/>
                 <Link to='/register'><p>Если Вы хотите зарегистрироватся, пожалуйста<button className='btn btn-secondary' >Нажмите на кнопку</button> </p></Link>
                 
            </div>
        )
    }
}