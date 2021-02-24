import React, { useState } from "react";
import { Link } from "react-router-dom";
import { allNewsData } from "../../../DataNews/DataNews";

const News = ({ news }) => {
  const [allNews, setAllNews] = useState(allNewsData);
  const { titleKey } = news;

  const newsPart = allNews.filter((a) => a.key === news.titleKey);
  // console.log(newsPart);
  return (
    <div className="col-6 pl-0 mb-5">
      <div className="card border-0">
        <h5 className="border-bottom font-weight-bold text-dark border-danger m-1 mb-2 pb-2">
          {titleKey}
        </h5>
        <Link
          to={"/news/" + newsPart[0].id}
          //   key={index}
          className="text-decoration-none text-dark"
        >
          <img
            className="card-img-top rounded img-fluid "
            src={newsPart[0].images}
            alt="Card image cap"
          />
          <div className="card-body p-0 mt-3 mb-2">
            <h5 className="card-title font-weight-bold text-dark p-1">
              {newsPart[0].newsTitle}
            </h5>
          </div>
        </Link>

        <ul className="list-group list-group-flush">
          {}
          {newsPart.map((newsData, index) => (
            <Link
              to={"/news/" + newsData.id}
              key={index}
              className="text-decoration-none text-dark"
            >
              <div className="card border-0 mb-1 h-25">
                <div className="row g-0">
                  <div className="col-md-4 col-sm-5 p-0">
                    <img
                      src={newsData.images}
                      className="img-fluid rounded p-1 pl-3"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 col-sm-7 p-1">
                    <div className="card-body p-0">
                      <h6 className="card-title font-size-small font-weight-bold">
                        {newsData.newsTitle}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
