import Movie from "./Movie";
import "../Styles/List.css";

const List = (props) => {
  return (
    <div className='list-container'>
      {props.list.map((movie) => (
        <Movie
          fetchTV={props.fetchTV}
          fetchMovie={props.fetchMovie}
          add={props.addToList}
          movie={movie}
          key={Math.random().toString()}
        />
      ))}
    </div>
  );
};

export default List;
