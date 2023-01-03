import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetail, getGameDetail } from "../../redux/actions";
import Loading from "../Loading/Loading";
import Nav from "../Nav/Nav";
import Image from "../../resources/Image.png";
import style from "./GameDetail.module.css";

const GameDetail = (props) =>{
    const {id} = useParams();
    const dispatch = useDispatch();
    const {id:userId,name,genres,image,released,rating,platforms,description} = useSelector(state=>state.gameDetail);


    useEffect(()=>{
        dispatch(getGameDetail(id))

        return ()=>{   
            dispatch(cleanDetail())
        }
        
    },[dispatch, id]) 


    if(name){
    return(
        <>
            <Nav />
            <div className={style.background}>
            <div className={style.container}>
                <h1>{name}</h1>
                <img className={style.image} src={image ? image : Image} alt={name} />
                <div>
                    <label>Released Date:</label>
                    <div>
                        <span key={released}>{released}</span>
                    </div>
                </div>
                <div>
                    <label>Rating:</label>
                    <div >
                        <span key={rating}>{`✫ ${rating}`}</span>
                    </div>
                </div>
                <div>
                    <label>Genres:</label>
                    <div>
                        {
                            genres.length?
                            genres.map(genre => <span key={genre.id + genre.name}>{genre.name}</span>)
                            :
                            (<p>Genre Not Found</p>)
                        }
                    </div>
                </div>
                <div>
                    <label>Platforms:</label>
                    <div>
                        {
                            platforms.length?
                            platforms.map(p => <span key={p}>{p}</span>)
                            :
                            (<p>Platform Not Found</p>)
                        }
                    </div>
                </div>
                <div className={style.description}>
                    {description}
                </div>

            </div>
            </div>
        </>
        )
    }else{
        return <Loading />
    }
}

export default GameDetail