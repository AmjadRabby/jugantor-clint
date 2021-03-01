import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { allNewsData } from "../../../DataNews/DataNews";
import NewsBox from "../NewsBox/NewsBox";
import PaperNews from "../NewsBox/PaperNews";

const HeadNews = () => {
  const [allNews, setAllNews] = useState(allNewsData);
  const headNews = allNews.slice(0, 9);
  // console.log(topNews.id);

  return (
    <Container className="mt-4">
      <div className="row">
        <div className="col-8 col-md-8 col-sm-12 p-0 sm-width-100">
          <Link className="" to={"/news/" + headNews[0].id}>
            <div className="card head-card-hover position-relative">
              <img
                src={headNews[0].images}
                className="card-img-top "
                alt="..."
              />
              <div className="card-body head-news-title">
                <p className="card-text sm-head-title font-weight-bold text-white">
                  {headNews[0].newsTitle}
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
                      className="card-img-top img-fluid rounded p-1"
                      alt=""
                    />
                    <div className="card-body p-1">
                      <h6 className="card-text sm-news-text font-size-small font-weight-bold ">
                        {newsItem.newsTitle}
                      </h6>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 col-md-4 sm-display-flex p-sm-0 col-sm-12">
          <div className="ml-3">
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

export default HeadNews;
