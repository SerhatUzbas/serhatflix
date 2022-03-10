import "../Styles/Header.css";
import netflixlogo from "../img/netflix-logo.png";
import { ReactComponent as Bell } from "../img/SVG/bell.svg";
import { ReactComponent as User } from "../img/SVG/user.svg";
import { ReactComponent as Down } from "../img/SVG/triangle-down.svg";
import Form from "./Form";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  let x = document.querySelector(".header__search--input");
  let y = document.querySelector(".header__search--icon");

  const shrinkInput = (event) => {
    console.log(event.target.classList.contains("header__search--icon"));

    if (
      event.target.classList.contains("header__search--icon") === false &&
      event.target.classList.contains("header__search--input") === false
    ) {
      x.classList.remove("exp");
      y.classList.remove("slide");
    }
  };

  const head = document.getElementById("root");
  return (
    <header className='header' onClick={shrinkInput}>
      <img className='header__logo' src={netflixlogo} alt='netflix-logo' />
      <nav className='header__nav'>
        <NavLink
          to='/Home'
          className={({ isActive }) =>
            isActive ? "header__nav--actitem" : "header__nav--item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/Home'
          className={({ isActive }) =>
            isActive ? "header__nav--actitem none" : "header__nav--item none"
          }
        >
          TV Shows
        </NavLink>
        <NavLink
          to='/Home'
          className={({ isActive }) =>
            isActive ? "header__nav--actitem none" : "header__nav--item none"
          }
        >
          Movies
        </NavLink>
        <NavLink
          to='/Home'
          className={({ isActive }) =>
            isActive ? "header__nav--actitem none" : "header__nav--item none"
          }
        >
          New & Popular
        </NavLink>
        <NavLink
          to='/List'
          onClick={() => head.scrollIntoView(true)}
          className={({ isActive }) =>
            isActive
              ? "header__nav--actitem toleft"
              : "header__nav--item toleft"
          }
        >
          My List
        </NavLink>
      </nav>
      <div className='header__profile'>
        <div className='header__profile--icon'>
          <User />
        </div>
        <svg className='header__profile--down'>
          <Down />
        </svg>

        <ul className='header__profile--nav'>
          <li className='header__profile--nav--item'>Manage Profile</li>
          <li className='header__profile--nav--item'>Account</li>
          <li className='header__profile--nav--item'>Help center</li>
          <li className='header__profile--nav--item'>Sign out</li>
        </ul>
      </div>

      <div className='header__notify'>
        <Bell fill='#fff' />
      </div>

      <div className='header__kid'>Kids</div>

      <Form search={props.searchMovie} />
    </header>
  );
};

export default Header;
