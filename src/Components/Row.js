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
        // slidesPerView={8}
        // spaceBetween={0}
        // slidesPerGroup={8}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        watchOverflow={false}
        breakpoints={{
          1700: {
            slidesPerView: 9,
            slidesPerGroup: 9,
          },
          1300: {
            slidesPerView: 8,
            slidesPerGroup: 8,
          },
          900: { slidesPerView: 7, slidesPerGroup: 7 },
          600: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          450: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          360: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          300: {
            slidesPerView: 3,
            slidesPerGroup: 3,
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
