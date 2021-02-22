import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { allNewsData } from "../../../DataNews/DataNews";
import NewsBox from "../../Home/NewsBox/NewsBox";
import PaperNews from "../../Home/NewsBox/PaperNews";

const NewsContainer = () => {
  const [allNews, setAllNews] = useState(allNewsData);
  //   const matchNews = allNews.filter(news => news.)

  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const currentPath = location.pathname;
    console.log(currentPath);
  }, [location]);

  return (
    <Container className="mt-4">
      <div className="row">
        <div className="col-8 col-md-8 col-sm-12 p-0">
          <Link className="" to={"/news/" + allNews[0].key}>
            <div className="card head-card position-relative">
              <img
                src={allNews[0].images}
                className="card-img-top "
                alt="..."
              />
              <div className="card-body head-news-title">
                <p className="card-text font-weight-bold text-white">
                  {allNews[0].newsTitle}
                </p>
              </div>
            </div>
          </Link>

          <div className="row mt-4 mb-4 p-2">
            {allNews.map((newsItem, index) => (
              <div key={index} className="col-4 p-1">
                <Link
                  to={"/news/" + newsItem.key}
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

export default NewsContainer;
