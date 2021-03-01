import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NewsContainer from "../NewsContainer/NewsContainer";
import "./Literature.css";
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

const Literature = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <Container className="p-0 mt-4 mb-2">
      <ul className="nav border-bottom sm-hide-element pb-2 mb-3">
        <li className="nav-item ">
          {" "}
          <h5 className="nav-link text-primary font-weight-bolder p-1 mb-0 mr-4">
            সাহিত্য
          </h5>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            aria-current="page"
            href="#"
          >
            গদ্য
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            গল্প
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            কবিতা
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
            বইমেলা
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            গ্রন্থ আলোচনা
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            পুরস্কার
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link border-left p-0 px-2 text-dark font-weight-bolder font-size-small"
            href="#"
          >
            শিল্পসাহিত্যের খবর
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
            সাহিত্য সব খবর
          </a>
        </li>
      </ul>

      <div className="accordion-element ">
        <div className="">
          <h5
            className="btn bg-light text-left d-flex justify-content-between border-bottom w-100 h-100 text-dark font-weight-bold "
            onClick={handleClick}
          >
            সাহিত্য
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
        <NewsContainer title="literature" />
      </section>
    </Container>
  );
};

export default Literature;
