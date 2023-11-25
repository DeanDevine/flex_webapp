import React from "react";
import "../styles/NavBar.css";
import logo from '../assets/favicon-32x32.png'

const NavBar = () => {
  return (
    <nav>
        <img className='logo' src={logo} alt='logo' />
      <ul>
        <li>
          <a href="#articles">Articles</a>
        </li>
        <li>
          <a href="#exercises">Exercises</a>
        </li>
        <li>
          <a href="#forum">Forum</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
