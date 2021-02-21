import React, { useState } from "react";
import "./ScrollTop.css";
import { FaChevronUp } from "react-icons/fa";

const ScrollTop = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 250) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  console.log(scroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {scroll && (
        <div
          onClick={scrollToTop}
          className="scroll-top d-flex justify-content-center align-items-center rounded-circle border border-danger"
        >
          <FaChevronUp className="scroll-icon text-danger" />
        </div>
      )}
    </>
  );
};

export default ScrollTop;
