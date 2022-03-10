import "../Styles/Row.css";
import Movie from "./Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "../Styles/swiper.css";
import "swiper/css/pagination";
import "../Styles/navigation.css";
import React from "react";
const Row = (props) => {
  return (
    <>
      <h1 className='headerr'>{props.title}</h1>
      <Swiper
        key={Math.random().toString()}
        slidesPerView={7}
        spaceBetween={0}
        slidesPerGroup={7}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        watchOverflow={false}
        breakpoints={{
          1300: {
            slidesPerView: 7,
          },
          600: {
            slidesPerView: 6,
          },
          450: {
            slidesPerView: 5,
          },
          360: {
            slidesPerView: 4,
          },
          300: {
            slidesPerView: 3,
          },
        }}
      >
        {props.moviesData.map((movie) => (
          <SwiperSlide key={Math.random().toString()}>
            <Movie
              add={props.addToList}
              fetchTV={props.fetchTV}
              fetchMovie={props.fetchMovie}
              movie={movie}
              key={Math.random().toString()}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Row;
