import React, { useState } from "react";
import "./NewsContainer.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { allNewsData } from "../../../DataNews/DataNews";
import NewsBox from "../../Home/NewsBox/NewsBox";
import PaperNews from "../../Home/NewsBox/PaperNews";

const NewsContainer = ({newsItem}) => {
  const [allNews, setAllNews] = useState(allNewsData);
  const topNews = allNews[0];
  const headNews = allNews.slice(0, 9);
  // console.log(headNews);

  return (
    <Container className=" mt-4">
      <div className="row">
        <div className="col-8 col-md-8 col-sm-12 p-0">
          <Link className="" to={"/news/" + topNews.key}>
            <div className="card brand-hover head-card position-relative">
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
                  to={"/news/" + newsItem.key}
                  className="text-decoration-none text-dark"
                >
                  <div className="card brand-hover border-0 mb-3">
                    <img
                      src={newsItem.images}
                      className="card-img-top rounded p-1"
                      alt=""
                    />
                    <div className="card-body p-1">
                      <p className="card-text font-size-small font-weight-bold ">
                        {newsItem.newsTitle}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="col-4 col-md-4 col-sm-12">
          <Link className="" to={"/news/" + topNews.key}>
            <div className="card brand-hover head-card position-relative mb-3">
              <img src={topNews.images} className="card-img-top " alt="..." />
              <div className="card-body p-2 news-container-title ">
                <p className="card-text font-weight-bold text-white">
                  {topNews.newsTitle}
                </p>
              </div>
            </div>
          </Link>
          <Link className="" to={"/news/" + topNews.key}>
            <div className="card head-card position-relative mb-3">
              <img src={topNews.images} className="card-img-top " alt="..." />
              <div className="card-body p-2 news-container-title ">
                <p className="card-text font-weight-bold text-white">
                  {topNews.newsTitle}
                </p>
              </div>
            </div>
          </Link>
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

export default NewsContainer;
