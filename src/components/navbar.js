import logo from '../assets/logo.png' 
import '../styles/navbar.css'
import React from 'react'

class TopNavBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.expandMenu = this.expandMenu.bind(this)
    }

    expandMenu = () => {
        var x = document.getElementById("menu");
        x.style.display =="flex" ? x.style.display = "none" : x.style.display = "flex"
    }

    render(){
        return (
            <nav className='nav-bar'>
                <span className="menu-span">
                    <a className='font'>Home</a>
                    <a className='font'>Settings</a>
                    <a className='font'>Contact Us</a>
                </span>
                <a class="icon" onClick={this.expandMenu}><i class="fa fa-bars"></i></a>
                <span>
                    <input className='input font btn' placeholder='Search'/>
                    <button className='btn font'>Search</button> 
                </span>
                <span className="menu" id="menu">
                    <p><a className='font'>Home</a></p>
                    <p><a className='font'>Settings</a></p>
                    <p><a className='font'>Contact Us</a></p>
                </span>
            </nav>
        )
    }
}

export {TopNavBar}