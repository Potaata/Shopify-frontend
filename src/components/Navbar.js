import React, { useState, useEffect } from "react";
import logo from "../images/logo.png"; // Assuming the logo is in the src/images folder
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyle = {
    backgroundColor: `rgba(33, 55, 87, ${scrollPosition > 0 ? 0.8 : 0})`,
  };

  return (
    <nav style={navStyle}>
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </label>
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">PORTFOLIO</a>
          </li>
          <li>
            <a href="#">SERVICE</a>
          </li>
          <li>
            <a href="#">BLOG</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </li>
          <li>
            <FontAwesomeIcon icon="fa-regular fa-bell" />
          </li>
        </ul>

        <label htmlFor="menu-btn" className="btn menu-btn">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </label>
      </div>
    </nav>
  );
};

export default NavBar;
