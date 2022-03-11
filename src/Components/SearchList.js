import Movie from "./Movie";
import "../Styles/List.css";

const SearchList = (props) => {
  return (
    <div className='list-container'>
      {props.list ? (
        props.list.map((movie) => (
          <Movie
            add={props.addToList}
            fetchTV={props.fetchTV}
            fetchMovie={props.fetchMovie}
            movie={movie}
            key={Math.random().toString()}
          />
        ))
      ) : (
        <div>Loading... </div>
      )}
    </div>
  );
};

export default SearchList;
