import React, { useState } from "react";
import "./NewsDetails.css";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { allNewsData } from "../../../DataNews/DataNews";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaTwitter,
  FaPinterest,
  FaLinkedinIn,
  FaPrint,
} from "react-icons/fa";

const NewsDetails = () => {
  const [headNews, setHeadNews] = useState(allNewsData);
  // const [item] = headNews;
  // const [data] = item.news;

  const { key } = useParams();
  // const allNews = headNews.map((n) => n.news);
  const newsInfo = headNews.find((pd) => pd.key == key);
  console.log(newsInfo);
  return (
    <Container>
      <Row>
        <div className="col-8 p-0 mb-5">
          <h1>{newsInfo.key}</h1>
          <h5 className="font-weight-bold p-1 text-secondary mt-5">
            {newsInfo.title} <span className="ml-2 mr-2"> >> </span>{" "}
            {newsInfo.newsTitle}
          </h5>
          <div class="card mt-4 ">
            <div class="card-header bg-transparent">
              {" "}
              <h5 class="card-title font-weight-bold">{newsInfo.newsTitle}</h5>
            </div>
            <div class="card-body p-0">
              <img
                src={newsInfo.images}
                className="card-img-top rounded"
                alt=""
              />
              <p class="card-text mt-4 mb-4">{newsInfo.description}</p>
            </div>
            <div class="card-footer bg-transparent text-primary">
              <span className=" border-right border-dark text-dark pr-2 mr-2">
                20 Shares
              </span>
              <FaFacebook className="social-icon" />{" "}
              <FaFacebookMessenger className="social-icon" />{" "}
              <FaTwitter className="social-icon" />{" "}
              <FaPinterest className="social-icon" />
              <FaLinkedinIn className="social-icon" />{" "}
              <FaPrint className="social-icon" />
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default NewsDetails;
