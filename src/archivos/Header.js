import React,{Component} from "react";
import logo from '../Logos_Encabezado.png'
import '../App.css'

class Header extends Component{
    render(){
        return(
            <div className = "Elheader">
                <img className = "teclogo" src = {logo} alt = "Sin imagen x.x"/>
            </div>
        )
    }
}

export default Header;