import { forwardRef } from "react";
import { ReactComponent as Play } from "../img/SVG/controller-play.svg";
import { ReactComponent as Info } from "../img/SVG/info.svg";

import "../Styles/Content.css";
const Content = (props) => {
  const openModal = () => {
    props.fetchMovie(props.conmov.id);
  };
  return (
    props.conmov && (
      <section className='content'>
        <img
          src={props.conmov.backdrop}
          alt='content'
          className='content__back'
        />
        <h1 className='content__header'>{props.conmov.title}</h1>
        <h3 className='content__para'>{props.conmov.overview}</h3>
        <div className='content__btn-1'>
          <svg className='icon-1'>
            <Play />
          </svg>
          <span className='text-1'>Play</span>
        </div>
        <div className='content__btn-2' onClick={openModal}>
          <svg className='icon-2'>
            <Info />
          </svg>
          <span className='text-2'>More Info</span>
        </div>
      </section>
    )
  );
};

export default Content;
