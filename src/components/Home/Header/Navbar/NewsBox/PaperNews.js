import React from "react";
import ELogo from "../../../../../images/e-paper.png";
import EPaper from "../../../../../images/news/jugantor-paper.jpg";

const PaperNews = () => {
  return (
    <div className="text-center border mt-5 ">
      <img src={ELogo} alt="" className="img-fluid mt-3 mb-3" />
      <img src={EPaper} alt="" className="img-fluid h-100 w-100" />
    </div>
  );
};

export default PaperNews;
