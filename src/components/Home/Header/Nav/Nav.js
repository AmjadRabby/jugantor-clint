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
    <nav className="container bg-dark">
      <ul class="nav d-flex align-items-center">
        <li class="nav-item top-nav">ঢাকা, বাংলাদেশ </li>
        <li class="nav-item top-nav ">
          মঙ্গলবার, ১৬ ফেব্রুয়ারি ২০২১, ৩ ফাল্গুন ১৪২৭
        </li>
        <li class="nav-item top-nav">আজকের পত্রিকা</li>
        <li class="nav-item  top-nav">ই-পেপার</li>
        <li class="nav-item top-nav">আর্কাইভ</li>
        <li class="nav-item top-nav">কনভার্টার</li>
        <li class="nav-item top-nav">বেটা ভার্সন</li>

        <li class="nav-item ml-auto">
          <a class="nav-link text-white p-1" aria-current="page" href="#">
            <FaFacebookF />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white p-1" href="#">
            <FaTwitter />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white p-1" href="#">
            <FaYoutube />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white p-1" href="#">
            <FaPinterest />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white p-1" href="#">
            <FaLinkedinIn />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white p-1" href="#">
            <FaInstagram />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white p-1" href="#">
            <FaRss />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
