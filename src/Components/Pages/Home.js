import Header from "../Header";
import Content from "../Content";
import Row from "../Row";
import Modal from "../Modal";
import "../../Styles/Layout.css";
import { Outlet, Route, Routes } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <Content />

      {props.popMoviesData && (
        <Row
          title='Popular'
          addToList={props.addToList}
          moviesData={props.popMoviesData}
          fetchTV={props.fetchTV}
          fetchMovie={props.fetchMovie}
        />
      )}
      {props.mostMoviesData && (
        <Row
          title='Most Watched Movies'
          addToList={props.addToList}
          moviesData={props.mostMoviesData}
          fetchTV={props.fetchTV}
          fetchMovie={props.fetchMovie}
        />
      )}
      {props.topMoviesData && (
        <Row
          title='Top Rated Movies'
          addToList={props.addToList}
          moviesData={props.topMoviesData}
          fetchTV={props.fetchTV}
          fetchMovie={props.fetchMovie}
        />
      )}
      {props.popTvData && (
        <Row
          title='Popular TV Shows'
          addToList={props.addToList}
          moviesData={props.popTvData}
          fetchTV={props.fetchTV}
          fetchMovie={props.fetchMovie}
        />
      )}
      {props.topTvData && (
        <Row
          title='Top rated TV Shows'
          addToList={props.addToList}
          moviesData={props.topTvData}
          fetchTV={props.fetchTV}
          fetchMovie={props.fetchMovie}
        />
      )}
      {/* element={<ModalPage onClose={props.closeModal} movie={props.movie} />} */}
    </>
  );
};
export default Home;
