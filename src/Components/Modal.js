import "../Styles/Modal.css";
import React from "react";
import ReactDOM from "react-dom";
import { Outlet } from "react-router-dom";
const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className='backdrop' onClick={props.onClose}></div>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className='mcontainer'>
          <img
            className='mcontainer__image'
            src={props.movie.backdrop}
            alt='asd'
          />
          <div className='mcontainer__topcont'>
            <h2 className='mcontainer__topcont--date'>{props.movie.relDate}</h2>
            <h2 className='mcontainer__topcont--tag'>{props.movie.title}</h2>
            <h2 className='mcontainer__topcont--rate'>
              <span className='mcontainer__topcont--rate--1'>Rating: </span>
              <span className='mcontainer__topcont--rate--2'>
                {props.movie.vote}
              </span>
            </h2>
          </div>
          {props.movie.genres &&
            props.movie.genres.map((genre) => (
              <h3 className='mcontainer__genres'>{genre.name} </h3>
            ))}
          <h2 className='mcontainer__title'>{props.movie.tagline}</h2>

          <p className='mcontainer__overview'>{props.movie.overview}</p>

          <div className='empty'></div>
        </div>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
