import React from "react";
import { Link } from "react-router-dom";
import Start from "../../resources/PressStart.gif";
import style from "./Landing.module.css";
import videogames from "../../resources/videogames.mp4";

const Landing = () => {   
    return (
        <div className={style.container} >
            

            <video className={style.video} autoPlay loop preload muted>
                    <source src={videogames} type='video/mp4'></source>
            </video>
            <h1 className={style.title}>GAMES W✫RLD</h1> 
            <div className={style.start}>
                
                <Link to="/home">
                    <img src={Start} alt="PRESS START" />
                </Link>
            </div>
        
        </div>
    );
}

export default Landing;