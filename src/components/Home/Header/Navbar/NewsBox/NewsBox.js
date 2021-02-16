import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RecantNews } from "../../../../../DataNews/DataNews";

const NewsBox = () => {
  const [news, setNews] = useState(RecantNews);
  return (
    <div className="news-box">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link box-btn mr-2  active"
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
        <li class="nav-item d-flex justify-content-end" role="presentation">
          <button
            class="nav-link box-btn"
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
      <div class="tab-content news-box-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          {news.map((news, index) => (
            <Link className="text-decoration-none text-dark">
              <div class="card border-0 mb-3 h-25">
                <div class="row g-0">
                  <div class="col-md-4 p-0">
                    <img
                      src={news.img}
                      class="img-fluid rounded p-1"
                      s
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body p-0">
                      <h6 class="card-title font-size-small font-weight-bold">
                        {news.title}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div
          class="tab-pane fade"
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
  );
};

export default NewsBox;
