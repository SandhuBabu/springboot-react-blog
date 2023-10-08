import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Search from "./Search";
import logo from "../../assets/logo-t.png";
import "./Header.scss";

const Header = () => {
  const opnSearch = () => {
    document.querySelector(".nav-search").style.transform = "translateY(0em)";
  };

  const handleHeader = () => {
    const height = document.querySelector("header").style.height;
    if (height === "5em") {
      document.querySelector("header").style.height = "20em";
      return;
    }
    document.querySelector("header").style.height = "5em";
  };

  const closeHeaderNavClick = () => {
    document.querySelector("header").style.height = "5em";
  }

  return (
    <>
      <header style={{ height: "5em" }} className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <Search />

        <ul>
          <li>
            <NavLink to="/">
              <span onClick={closeHeaderNavClick}>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs">
              <span onClick={closeHeaderNavClick}>Blogs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <span onClick={closeHeaderNavClick}>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span onClick={closeHeaderNavClick}>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span onClick={closeHeaderNavClick}>Contact</span>
            </NavLink>
          </li>
        </ul>

        <div className="login-btn">
          <button onClick={handleHeader}>Login</button>
        </div>

        <div className="util-btns">
          <button className="open-search" onClick={opnSearch}>
            <BsSearch />
          </button>
          <button className="menu-toggle" onClick={handleHeader}>
            <AiOutlineMenu />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
