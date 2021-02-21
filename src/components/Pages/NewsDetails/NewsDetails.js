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
  FaClock,
} from "react-icons/fa";
import NewsBox from "../../Home/NewsBox/NewsBox";
import PaperNews from "../../Home/NewsBox/PaperNews";

const NewsDetails = () => {
  const [headNews, setHeadNews] = useState(allNewsData);

  const { key } = useParams();
  const newsInfo = headNews.find((pd) => pd.key == key);
  console.log(newsInfo);
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <div className="col-8 p-0 ">
          {/* <h2>News key : {newsInfo.key}</h2> */}
          <h5 className="font-weight-bold p-1 text-secondary">
            প্রচ্ছদ <span className="ml-2 mr-2"> >> </span>
            <span className="text-primary"> {newsInfo.title}</span>{" "}
            <span className="ml-2 mr-2"> >> </span> {newsInfo.newsTitle}
          </h5>
          <div class="card border-0 mt-4 ">
            <div class="card-header bg-transparent p-2">
              {" "}
              <h5 class="card-title font-weight-bold">{newsInfo.newsTitle}</h5>
              <div class="text-primary d-flex justify-content-between pt-2 pb-2">
                <div className="d-flex align-items-center text-secondary">
                  <FaClock className="mr-2"/>
                  ২১ ফেব্রুয়ারি ২০২১
                </div>
                <div className="">
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
            <div class="card-body p-0">
              <img
                src={newsInfo.images}
                className="card-img-top rounded"
                alt=""
              />
              <p class="card-text mt-5 mb-4">{newsInfo.description}</p>
            </div>
            <div class="card-footer border-0 bg-transparent text-primary">
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
        <div className="col-4 col-md-4 col-sm-12 mt-5">
          <div className="ml-3">
            <NewsBox />
          </div>
          <div className="ml-3">
            <PaperNews />
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default NewsDetails;
