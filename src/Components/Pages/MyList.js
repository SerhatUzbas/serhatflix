import Header from "../Header";
import List from "../List";
import Modal from "../Modal";
import "../../Styles/Layout.css";

const MyList = (props) => {
  return (
    <>
      <List
        addToList={props.addToList}
        list={props.curState}
        fetchTV={props.fetchTV}
        fetchMovie={props.fetchMovie}
      />
    </>
  );
};

export default MyList;
