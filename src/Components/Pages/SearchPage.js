import Header from "../Header";
import SearchList from "../SearchList";
import Modal from "../Modal";
import "../../Styles/Layout.css";
const SearchPage = (props) => {
  return (
    <>
      {props.searchlist && (
        <SearchList
          addToList={props.addToList}
          list={props.searchlist}
          fetchTV={props.fetchTV}
          fetchMovie={props.fetchMovie}
        />
      )}
    </>
  );
};

export default SearchPage;
