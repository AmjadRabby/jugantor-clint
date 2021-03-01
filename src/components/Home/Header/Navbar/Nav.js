import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaLinkedinIn,
  FaInstagram,
  FaRss,
} from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="container nav-container p-0 bg-dark">
      <ul className="nav d-flex align-items-center">
        <li className="nav-item top-nav sm-hide-element">ঢাকা, বাংলাদেশ </li>
        <li className="nav-item top-nav sm-nav-space">
          মঙ্গলবার, ১৬ ফেব্রুয়ারি ২০২১, ৩ ফাল্গুন ১৪২৭
        </li>
        <li className="nav-item top-nav">আজকের পত্রিকা</li>
        <li className="nav-item  top-nav">ই-পেপার</li>
        <li className="nav-item top-nav sm-hide-element">আর্কাইভ</li>
        <li className="nav-item top-nav sm-hide-element">কনভার্টার</li>
        <li className="nav-item top-nav">বেটা ভার্সন</li>

        <li className="nav-item ml-auto sm-hide-element">
          <a className="nav-link text-white p-1" aria-current="page" href="#">
            <FaFacebookF />
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a className="nav-link text-white p-1" href="#">
            <FaTwitter />
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a className="nav-link text-white p-1" href="#">
            <FaYoutube />
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a className="nav-link text-white p-1" href="#">
            <FaPinterest />
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a className="nav-link text-white p-1" href="#">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a className="nav-link text-white p-1" href="#">
            <FaInstagram />
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a className="nav-link text-white p-1" href="#">
            <FaRss />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
