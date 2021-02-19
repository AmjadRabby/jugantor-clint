import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { HeadNewsData, RecantNews } from "../../../DataNews/DataNews";
import NewsBox from "./Navbar/NewsBox/NewsBox";
import PaperNews from "./Navbar/NewsBox/PaperNews";

const HeadNews = () => {
  const [headNews, setHeadNews] = useState(HeadNewsData);
  const [news, setNews] = useState(RecantNews);
  const [item] = headNews;
  const { title, img } = item;
  return (
    <Container className="mt-4">
      <div className="row">
        <div className="col-8 col-md-8 col-sm-12 p-0">
          <div className="card head-card m-1 mr-3 position-relative">
            <img src={img} className="card-img-top " alt="..." />
            <div className="card-body head-news-title">
              <p className="card-text font-weight-bold text-white">{title}</p>
            </div>
          </div>

          <div className="row mt-5 mb-4 pr-3">
            {news.map((news, index) => (
              <div key={index} className="col-4 p-1">
                <Link to="" className="text-decoration-none text-dark">
                  <div className="card border-0 mb-3">
                    <img
                      src={news.img}
                      className="card-img-top rounded p-1"
                      alt=""
                    />
                    <div className="card-body p-1">
                      <h6 className="card-text font-size-small font-weight-bold ">
                        {news.title}
                      </h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="col-4 col-md-4 col-sm-12">
          <div className="ml-3">
            <NewsBox />
          </div>
          <div className="ml-3">
            <PaperNews />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeadNews;
