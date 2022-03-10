import "../Styles/Movie.css";
import { ReactComponent as Play } from "../img/SVG/controller-play.svg";
import { ReactComponent as Plus } from "../img/SVG/plus.svg";
import { ReactComponent as Minus } from "../img/SVG/minus.svg";
import { ReactComponent as Tup } from "../img/SVG/thumbs-up.svg";
import { ReactComponent as Tdown } from "../img/SVG/thumbs-down.svg";
import { ReactComponent as Cdown } from "../img/SVG/chevron-thin-down.svg";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
const Movie = (props) => {
  const Mover = (e) => {
    const target = e.target.closest(".movie");

    const targetCoords = target.getBoundingClientRect();
    const position = window.innerWidth - targetCoords.width;

    if (targetCoords.x < 50) {
      target.classList.add("hoverleft");
    } else if (targetCoords.right > position) {
      target.classList.add("hoverright");
    } else {
      target.classList.add("hover");
    }
    target.style.zIndex = "34";
  };

  const Mout = (e) => {
    const target = e.target.closest(".movie");
    target.classList.remove("hover");
    target.classList.remove("hoverright");
    target.classList.remove("hoverleft");
    target.style.zIndex = "0";
  };

  const addItemHandler = () => {
    props.add(props.movie);
  };

  let modalid = useParams();
  const openModal = () => {
    console.log(modalid);

    if (props.movie.type === "tv") {
      props.fetchTV(props.movie.id);
    } else if (props.movie.type === "movie") {
      props.fetchMovie(props.movie.id);
    } else return "No data found";
  };

  return (
    <>
      <div onMouseOver={Mover} onMouseOut={Mout} className='movie'>
        <img src={props.movie.image} alt='' className='movie__img' />

        <div className='movie__container'>
          <div className='movie__container--icon--1'>
            <Play />
          </div>
          {props.movie.bookmarked === false ? (
            <div onClick={addItemHandler} className='movie__container--icon'>
              <Plus width='4rem' />
            </div>
          ) : (
            <div onClick={addItemHandler} className='movie__container--icon'>
              <Minus />
            </div>
          )}
          <div className='movie__container--icon'>
            <Tup />
          </div>
          <div className='movie__container--icon'>
            <Tdown />
          </div>
          <div onClick={openModal} className='movie__container--icon'>
            <Cdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
