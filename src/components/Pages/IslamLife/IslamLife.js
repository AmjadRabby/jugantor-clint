import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NewsContainer from "../NewsContainer/NewsContainer";
import "./IslamLife.css";
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

const IslamLife = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <Container className="p-0 mt-4 mb-2">
      <ul className="nav border-bottom sm-hide-element pb-2 mb-3">
        <li className="nav-item ">
          {" "}
          <h5 className="nav-link text-primary font-weight-bolder p-1 mb-0 mr-4">
            ইসলাম ও জীবন
          </h5>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            aria-current="page"
            href="#"
          >
            রমজান
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            মাসআলা-মাসায়েল
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            ইসলামী ব্যক্তিত্ব
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            মুসলিম বিশ্ব
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            ইতিহাস ও ঐতিহ্য
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            সাক্ষাৎকার
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            মিডিয়া
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            ইজতেমা
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            অন্যান্য
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-danger font-weight-bolder font-size-small"
            href="#"
          >
            ইসলাম ও জীবন সব খবর
          </a>
        </li>
      </ul>

      <div className="accordion-element ">
        <div className="">
          <h5
            className="btn bg-light text-left d-flex justify-content-between border-bottom w-100 h-100 text-dark font-weight-bold "
            onClick={handleClick}
          >
            ইসলাম ও জীবন
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
        <NewsContainer title="islam-life" />
      </section>
    </Container>
  );
};

export default IslamLife;
