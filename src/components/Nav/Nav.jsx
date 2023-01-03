import React from "react";
import { NavLink } from "react-router-dom";
import  style from "./Nav.module.css";
import logo from "../../resources/logo1.png"
import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    
    return(
        
        <div className={style.container}>            
            <h1 className={style.logo} >GAMES W✫RLD</h1>
            <div className={isOpen?style.openHamburguer:style.hamburguer} onClick={()=>setIsOpen(!isOpen)}>
               <div className={style.bar}></div>
               <div className={style.bar}></div>
           </div>

           <div className={isOpen?style.openMenu:style.menu}>
                
                <NavLink className={style.links} to="/home" >
                    Home
                </NavLink>          
                
                
                <NavLink className={style.links} to={"/create"}  >
                    Create Game
                </NavLink>
                
            </div>
        </div>
        
    )
}

export default Nav;