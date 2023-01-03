import React from "react";
import { Link } from "react-router-dom";
import Image from "../../resources/Image.png";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
 console.log(props);
  return (
    
    <Link className={style.card} to={`/videogame/${props.id}`} title={props.name}>
      
      <h5 className={style.name}>{props.name.length > 30 ? props.name.slice(0, 30).trim() + "..." : props.name}</h5>
      
      <div className={style.imageContainer}>
        <img className={style.image} src={props.image  ? props.image : Image} alt={props.name} />
        <div className={style.imageRating}>{`✫ ${props.rating}`}</div>
      </div>
      <div className={style.grid}>
        {
          props.genres.length < 4 ?
            props.genres.map(genre => <span key={props.id + genre.name} title={genre.name}>{genre.name === "Massively Multiplayer" ? "MM" : genre.name}</span>)
            : (
              <>
                <span key={props.id + props.genres[0].name} title={props.genres[0].name}>{props.genres[0].name === "Massively Multiplayer" ? "MM" : props.genres[0].name}</span>
                <span key={props.id + props.genres[1].name} title={props.genres[1].name}>{props.genres[1].name === "Massively Multiplayer" ? "MM" : props.genres[1].name}</span>
                <span key={props.id + "plus"} title={props.genres.slice(2).map(genre => genre.name)}>{"•••"}</span>
              </>
            )

        // <span >{props.released}</span>

        }
      </div>
    </Link>
       
  );
};

export default Card;