import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import toyota from "../../assets/toyota-Gus.jfif";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { AiFillCloseSquare, AiOutlineHome, AiOutlineContacts } from "react-icons/ai";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img className="img-container" src={toyota} alt="toyota" />
          <div className="menu-icon" onClick={handleShowNavbar}>
            {showNavbar ? <AiFillCloseSquare size="25px" /> : <FaBars size="25px" />}
          </div>
          <div className={`nav-elements ${showNavbar && "active"}`}>
            <ul>
              <li>
                <AiOutlineHome />
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <FcAbout />
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <AiOutlineContacts />
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
