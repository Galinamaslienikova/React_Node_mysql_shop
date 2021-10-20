import React from "react"
import { getTotalFromCart } from "../api/api"
import { findCookieValue } from "../components/cookies"
import Layot from "../components/Layot"
import { StartPageComp } from "../components/StartPageComp"


export default class StartPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            loader:true,
            totalInCart:'',
            username:'',
            user_id:''
          
        }
    }
    componentDidMount(){
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
        return(
            <div>
                <Layot  start='false' count={this.state.totalInCart&&this.state.totalInCart[0].quantity} pageName='Добро пожаловать в наш магазин футболок'/>
                <StartPageComp/>
            </div>
        )
    }

}