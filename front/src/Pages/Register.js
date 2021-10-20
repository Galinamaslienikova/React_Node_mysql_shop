import React from "react";
import LoginCreate from "../components/LoginCreate";
import { validate, validateLength } from "../components/vali";
import Modal from '../components/Modal';
import { Link } from "react-router-dom";

export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loginUsername:'',
            login:false,
            user_id:'',
            username:'',
            password:'',
            adress:'',
            email:'',
            phone:'',
            submit:false,
            modal:false,
            bigModal:false,
            message:false
        }
    }
    validate=(elem, patternValue)=> {
        let res = elem.search(patternValue);
        if (res === -1) {
            console.log(elem)
          this.setState({submit:false})  
        } else{
            this.setState({submit:true})  
        }
    }
    validateLength=(elem,count)=> {
        if (elem.length<count) {
            console.log(elem)
            this.setState({submit:false})  
        }else{
            this.setState({submit:true})  
        } 
    }
    nameVal=(e)=>{
        this.setState({
           [e.target.name]:e.target.value
        })
        e.target.name==='phone'&&validate(e.target.value,/^0\d\d-\d\d\d-\d\d-\d\d$/,e.target)
        e.target.name==='email'&&validate(e.target.value,/\b[a-zA-Z0-9._]+@[a-z0-9.-]+[.][a-z]{2,4}\b/,e.target)
        e.target.name==='username'&&validateLength(e.target.value,3,e.target)
        e.target.name==='adress'&&validateLength(e.target.value,10,e.target)
        e.target.name==='password'&&validateLength(e.target.value,7,e.target)
    }
    onSub=(e)=>{
        let a=validate(this.state.phone,/^0\d\d-\d\d\d-\d\d-\d\d$/)
        let b=validate(this.state.email,/\b[a-zA-Z0-9._]+@[a-z0-9.-]+[.][a-z]{2,4}\b/)
        let c=validateLength(this.state.username,3)
        let d=validateLength(this.state.adress,10)
        let f=validateLength(this.state.password,7)
         if(a===-1||b===-1||c===-1||d===-1||f===-1){ 
            e.preventDefault()
            this.setState({modal:true,message:true})
         }else{
            fetch('/create', {
                method: 'POST',
                body:JSON.stringify({username:this.state.username,password:this.state.password,email:this.state.email,adress:this.state.adress,phone:this.state.phone})
                    })
                    .then(response => {
                        if (!response.ok) {
                            this.setState({
                                modal:true
                            })
                        }else{
                            this.setState({
                                bigModal:true
                            })
                        }
                    })
            e.preventDefault() 
         }
    }
    modalClose=()=>{
        this.setState({
            modal:false,
            message:false
        })
    }
    render(){
        return(
            <div className='container'>
                {this.state.bigModal&&<Modal home='true' visibility={this.state.bigModal?'visible':'hidden'}>Вы успешно зарегистрировались, пожалуйста <Link to='login'>войдите, чтоб начать покупки</Link></Modal>}
                {this.state.modal&&<Modal onClose={this.modalClose} visibilitySmall={this.state.modal?'visible':'hidden'}small='true'>{this.state.message?'Введите коректно все данные в поле ввода':'Пользователь с таким email уже существует'}</Modal>}
                 <LoginCreate onSub={this.onSub} nameVal={this.nameVal}  login={this.state.login}/>
                 <p>Если Вы уже зарегистрированый пользователь, пожалуйста<Link to='/login'><button className='btn btn-secondary'>Нажмите на кнопку</button></Link>  </p>
            </div>
        )
    }
}