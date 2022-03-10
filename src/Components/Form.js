import "../Styles/Form.css";
import { ReactComponent as Search } from "../img/SVG/search.svg";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Form = (props) => {
  const [searchParam] = useSearchParams();
  const searchTerm = searchParam.get("name");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleSearch = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    if (name && name.length > 1) {
      navigate(`/Search?name=${name}`);
    } else if (name.length === 1) {
      navigate("/Home");
    }
  }, [name]);

  // const formik = useFormik({
  //   initialValues: {
  //     searchQuery: "",
  //   },
  //   validationSchema: Yup.object({
  //     searchQuery: Yup.string()
  //       .max(16, "Search query must be 16 character or less")
  //       .required("Required"),
  //   }),
  //   onSubmit: () => {
  //     props.search(formik.values.searchQuery);
  //     console.log(formik.values.searchQuery);
  //   },
  // });

  const handleSubmit = () => {
    props.search(name);
  };

  useEffect(() => {
    if (searchTerm) {
      props.search(searchTerm);
    }
  }, []);
  let x = document.querySelector(".header__search--input");
  let y = document.querySelector(".header__search--icon");

  const expandInput = (event) => {
    x.classList.add("exp");
    y.classList.add("slide");
    console.log(event.target);
  };
  console.log(name);

  return (
    <div className='header__search'>
      <svg className='header__search--icon' onClick={expandInput}>
        <Search />
      </svg>
      <form onChange={handleSubmit}>
        <input
          onClick={props.expandInput}
          className='header__search--input'
          id='searchQuery'
          name='searchQuery'
          type='text'
          onChange={handleSearch}
          value={name}
          placeholder='Movies or TV shows'
        />
      </form>
    </div>
  );
};

export default Form;
