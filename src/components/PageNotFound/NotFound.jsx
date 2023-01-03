import React from "react";
import NotFound from "../../resources/NotFound.png";
import Nav from "../Nav/Nav";
import style from "./NotFound.module.css";



const PageNotFound = () => {
    return (
        <>      
            <Nav />
            <div className={style.container}>
                <img src={NotFound} alt="Page Not Found" />
            </div>
        </>
    );
}

export default PageNotFound;