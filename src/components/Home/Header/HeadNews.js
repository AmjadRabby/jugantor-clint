import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  HeadNewsData,
  allNewsData,
  RecantNews,
} from "../../../DataNews/DataNews";
import NewsBox from "../NewsBox/NewsBox";
import PaperNews from "../NewsBox/PaperNews";

const HeadNews = () => {
  const [allNews, setAllNews] = useState(allNewsData);
  const topNews = allNews[0];
  const headNews = allNews.slice(0, 9)
  // console.log(headNews);
  return (
    <Container className="mt-4">
      <div className="row">
        <div className="col-8 col-md-8 col-sm-12 p-0">
          <Link className="" to={"/" + topNews.key}>
            <div className="card head-card position-relative">
              <img src={topNews.images} className="card-img-top " alt="..." />
              <div className="card-body head-news-title">
                <p className="card-text font-weight-bold text-white">
                  {topNews.newsTitle}
                </p>
              </div>
            </div>
          </Link>

          <div className="row mt-4 mb-4 p-2">
            {headNews.map((newsItem, index) => (
              <div key={index} className="col-4 p-1">
                <Link
                  to={"/" + newsItem.key}
                  className="text-decoration-none text-dark"
                >
                  <div className="card border-0 mb-3">
                    <img
                      src={newsItem.images}
                      className="card-img-top rounded p-1"
                      alt=""
                    />
                    <div className="card-body p-1">
                      <h6 className="card-text font-size-small font-weight-bold ">
                        {newsItem.newsTitle}
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
