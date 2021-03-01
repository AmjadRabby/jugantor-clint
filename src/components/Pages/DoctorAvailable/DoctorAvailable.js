import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NewsContainer from "../NewsContainer/NewsContainer";
import "./DoctorAvailable.css";
import { FaChevronDown, FaAngleUp } from "react-icons/fa";

const newsNav = [
  {
    title: " সরকার",
  },
  {
    title: " অপরাধ",
  },
  {
    title: " আইন-বিচার",
  },

  {
    title: " গণমাধ্যম",
  },
  {
    title: " দুর্ঘটনা",
  },
  {
    title: " শোক ",
  },

  {
    title: " অন্যান্য",
  },
  {
    title: " জাতীয় সব খবর",
  },
];
const DoctorAvailable = () => {
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);
  return (
    <Container className="p-0 mt-4 mb-2">
      <ul className="nav border-bottom pb-2 mb-3">
        <li className="nav-item ">
          {" "}
          <h5 className="nav-link text-primary font-weight-bolder p-1 mb-0 mr-4">
            ডাক্তার আছেন
          </h5>
        </li>
        <li className="nav-item sm-hide-element">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            aria-current="page"
            href="#"
          >
            রোগব্যাধি
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            নারীস্বাস্থ্য
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            শিশুস্বাস্থ্য
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            খাবারের গুনাগুন
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            টিপস
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            মেডিকেল লাইফ
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            স্বাস্থ্য জিজ্ঞাসা
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            স্বারোগ জয়ের গল্প
          </a>
        </li>
        <li className="nav-item sm-hide-element">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            বিবিধ
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-danger font-weight-bolder font-size-small"
            href="#"
          >
            ডাক্তার আছেন সব খবর
          </a>
        </li>
      </ul>

      <div className="accordion-element ">
        <div className="">
          <h5
            className="btn bg-light text-left d-flex justify-content-between border-bottom w-100 h-100 text-dark font-weight-bold "
            onClick={handleClick}
          >
            ডাক্তার আছেন
            <span className="">
              {click ? (
                <FaAngleUp className="m-auto icon-angle-up" />
              ) : (
                <FaChevronDown className=" icon-angle-down" />
              )}
            </span>
          </h5>
        </div>

        {click && (
          <ul className="list-unstyled row bg-light rounded m-0 w-100 p-1 pl-3">
            {newsNav.map((nav, index) => (
              <li key={index} className="col-6 p-1">
                <a href="#" className="text-decoration-none">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <section className="">
        <NewsContainer title="doctor-available" />
      </section>
    </Container>
  );
};

export default DoctorAvailable;
