import React from "react";
import Card from "../Card/Card";
import Image from "../../resources/Image.png";
import style from "./Pagination.module.css";


function ScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const Pagination = (props) => {
  const itemsPerPage = 15;
  const lastPage = Math.ceil(props.games.length / itemsPerPage);

  const indexOfLastItem = props.page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.games.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextbtn = () => {
    ScrollToTop();
    props.changePage(props.page + 1);
  };

  const handlePrevbtn = () => {
    ScrollToTop();
    props.changePage(props.page - 1);
  };

  return (
    <>
      {
        props.games.length ? currentItems.map((g) => { 
          return (
            <Card id={g.id}  released={g.released} name={g.name} image={g.image ? g.image : Image} genres={g.genres} rating={g.rating} key={g.id} />
          )
        }) : <h2>Video game not found</h2>

      }
      <div className={style.pagination} style={{display: props.games.length ? 'block' : 'none' }}>
        <div className={props.page === 1 ? style.first : style.prev} onClick={props.page > 1 ? handlePrevbtn : null}>
        🢀 
        </div>
        <div className={style.actualPage}>
          {`${props.page} / ${lastPage}`}
        </div>
        <div className={props.page === lastPage ? style.last : style.next} onClick={props.page < lastPage ? handleNextbtn : null}>
        🢂
        </div>
      </div>
    </>
  );
}

export default Pagination;