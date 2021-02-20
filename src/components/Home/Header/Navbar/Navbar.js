import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import {
  FaTimes,
  FaBars,
  FaCaretDown,
  FaReact,
  FaSearch,
} from "react-icons/fa";
// import Dropdown from "./Dropdown";
// import Button from "./Button";
import { Container } from "react-bootstrap";
import logo from "../../../../images/amr-somy.png";
import DropdownItems from "./DropdownItems";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const handleNavScroll = () => {
    if (window.scrollY >= 80) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };
  window.addEventListener("scroll", handleNavScroll);
  return (
  
    <Container className="nav-container p-0 bg-light sticky-top">
      <nav
        className={
          navScroll
            ? "navbar shadow p-1"
            : "navbar border-bottom  border-dark p-1"
        }
      >
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" className="img-fluid main-logo" />
        </Link>
        <ul className={click ? "nav-menu  m-0 p-0 " : "nav-menu m-0 p-0 "}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              কোভিড-১৯
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              জাতীয়
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              রাজনীতি
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              অর্থনীতি
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links nav-links"
              onClick={closeMobileMenu}
            >
              আন্তর্জাতিক
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links nav-links-mobile"
              onClick={closeMobileMenu}
            >
              সারাদেশ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links nav-links-mobile"
              onClick={closeMobileMenu}
            >
              খেলা
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links nav-links-mobile"
              onClick={closeMobileMenu}
            >
              মার্কিন নির্বাচন
            </Link>
          </li>
          <li className=" nav-item">
            <Link
              to="/sign-up"
              className="nav-links nav-links-mobile"
              onClick={closeMobileMenu}
            >
              শিক্ষাঙ্গন
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links nav-links-mobile"
              onClick={closeMobileMenu}
            >
              লাইফ স্টাইল
            </Link>
          </li>
        </ul>

        <div
          className="menu-icon d-flex justify-content-center align-items-center"
          onClick={handleClick}
        >
          {click ? (
            <FaTimes className="times-icon" />
          ) : (
            <FaBars className="bars-icon" />
          )}
          <span className="ml-1 nav-links">আরও</span>
        </div>
        <FaSearch className="search-icon mr-3" />
      </nav>
      <div>{click && <DropdownItems />}</div>
    </Container>
  );
};

export default Navbar;
