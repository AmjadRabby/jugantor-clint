import React, { useState } from "react";
import { Link } from "react-router-dom";
import { allNewsData, RecantNews } from "../../../DataNews/DataNews";

const NewsBox = () => {
  const [allNews, setAllNews] = useState(allNewsData);
  return (
    <div className="news-box mb-4 sm-width-100">
      <div className="sm-width-100">
        <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
          <li className="nav-item w-sm-50" role="presentation">
            <button
              className="btn nav-link box-btn mr-2 active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              সর্বশেষ
            </button>
          </li>
          <li
            className="nav-item d-flex justify-content-end"
            role="presentation"
          >
            <button
              className="btn nav-link box-btn"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              সর্বাধিক পঠিত
            </button>
          </li>
        </ul>
        <div className="tab-content news-box-content " id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            {allNews.map((news, index) => (
              <Link
                to={"/news/" + news.id}
                key={index}
                className="text-decoration-none text-dark"
              >
                <div className="card border-0 mb-3 h-25">
                  <div className="row g-0">
                    <div className="col-5 col-md-4 p-1">
                      <img
                        src={news.images}
                        className="img-fluid rounded p-1"
                        alt="..."
                      />
                    </div>
                    <div className="col-7 p-1 col-md-8">
                      <div className="card-body p-0">
                        <h6 className="card-title sm-news-text font-size-small font-weight-bold">
                          {news.newsTitle}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            error maxime provident necessitatibus minima quae, saepe nam omnis
            perspiciatis numquam? error maxime provident necessitatibus minima
            quae, saepe nam omnis perspiciatis numquam? error maxime provident
            necessitatibus minima quae, saepe nam omnis perspiciatis numquam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            error maxime provident necessitatibus minima quae, saepe nam omnis
            perspiciatis numquam? error maxime provident necessitatibus minima
            quae, saepe nam omnis perspiciatis numquam? error maxime provident
            necessitatibus minima quae, saepe nam omnis perspiciatis numquam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            error maxime provident necessitatibus minima quae, saepe nam omnis
            perspiciatis numquam? error maxime provident necessitatibus minima
            quae, saepe nam omnis perspiciatis numquam? error maxime provident
            necessitatibus minima quae, saepe nam omnis perspiciatis numquam?
          </div>
        </div>
        <button className="btn mt-3 w-100 border-0 bg-primary text-white">
          সব খবর
        </button>
      </div>
    </div>
  );
};

export default NewsBox;
