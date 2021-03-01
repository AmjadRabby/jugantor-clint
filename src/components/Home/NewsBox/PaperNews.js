import React from "react";
import ELogo from "../../../images/e-paper.png";
import EPaper from "../../../images/news/jugantor-paper.jpg";

const PaperNews = () => {
  return (
    <section className="sm-news-box ">
      <div className="text-center sm-box-content border mt-5 mt-sm-0 ">
        <img src={ELogo} alt="" className="img-fluid paper-img mt-2 mb-3" />
        <img src={EPaper} alt="" className="img-fluid paper-img" />
      </div>
    </section>
  );
};

export default PaperNews;
