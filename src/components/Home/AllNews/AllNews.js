import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { allNewsData } from "../../../DataNews/DataNews";

const AllNews = () => {
  const [newsData, setNewsData] = useState(allNewsData);
  const { data } = newsData[0];
  console.log(data);
  return (
    <Container>
      <Row>
        <div className="col-8 col-md-8 col-sm-12 mt-4">
          <Row>
            {newsData.map((news, index) => (
              <div className="col-6 pl-0 mb-5">
                <div class="card border-0">
                  <h5 className="border-bottom font-weight-bold text-dark border-danger p-1 pb-2">
                    {news.title}
                  </h5>
                  <img
                    class="card-img-top rounded img-fluid p-1"
                    src={news.news[0].images}
                    alt="Card image cap"
                  />
                  <div class="card-body p-0 mt-3 mb-2">
                    <h5 class="card-title font-weight-bold text-dark">
                      {news.news[0].newsTitle}
                    </h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    {news.news.map((newsData, index) => (
                      <Link
                        to=""
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
            ))}
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default AllNews;
