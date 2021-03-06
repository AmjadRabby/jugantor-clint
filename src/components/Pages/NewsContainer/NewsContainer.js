import React, { useState } from "react";
import "./NewsContainer.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { allNewsData } from "../../../DataNews/DataNews";
import NewsBox from "../../Home/NewsBox/NewsBox";
import PaperNews from "../../Home/NewsBox/PaperNews";
const NewsContainer = ({ title }) => {
  const [allNews, setAllNews] = useState(allNewsData);
  const matchNews = allNews.filter((a) => a.key === title);
  const headNews = matchNews.slice(0, 9);
  console.log(matchNews);

  return (
    <Container className=" mt-4">
      <div className="row">
        <div className="col-8 col-md-8 col-sm-12 p-0 sm-width-100">
          <Link className="" to={"/news/" + matchNews[0].id}>
            <div className="card head-card-hover position-relative">
              <img
                src={matchNews[0].images}
                className="card-img-top "
                alt="..."
              />
              <div className="card-body head-news-title">
                <p className="card-text font-weight-bold text-white">
                  {matchNews[0].newsTitle}
                </p>
              </div>
            </div>
          </Link>

          <div className="row mt-4 mb-4 p-2">
            {headNews.map((newsItem, index) => (
              <div key={index} className="col-4 p-1">
                <Link
                  to={"/news/" + newsItem.id}
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

        <div className="col-4 col-md-4 col-sm-12 sm-news-100">
          <Link className="" to={"/news/" + matchNews[1].id}>
            <div className="card head-card-hover position-relative mb-3">
              <img
                src={matchNews[1].images}
                className="card-img-top img-fluid w-100"
                alt="..."
              />
              <div className="card-body p-2 news-container-title ">
                <p className="card-text font-weight-bold text-white">
                  {matchNews[1].newsTitle}
                </p>
              </div>
            </div>
          </Link>
          <Link className="" to={"/news/" + matchNews[2].id}>
            <div className="card head-card-hover position-relative mb-3">
              <img
                src={matchNews[2].images}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body p-2 news-container-title ">
                <p className="card-text font-weight-bold text-white">
                  {matchNews[2].newsTitle}
                </p>
              </div>
            </div>
          </Link>
          <div className="ml-3 sm-hide-element">
            <NewsBox />
          </div>
          <div className="ml-3 sm-hide-element">
            <PaperNews />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsContainer;
