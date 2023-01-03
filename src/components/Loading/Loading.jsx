import React from "react";
import LoadingComputer from "../../resources/Running.gif"
import Nav from "../Nav/Nav";
import style from "./Loading.module.css";

const Loading = () => {
    return (
        <>
        <Nav />
        <div className={style.container}>
        <img src={LoadingComputer} alt="Loading..." />
        </div>
        </>
    )
}

export default Loading;