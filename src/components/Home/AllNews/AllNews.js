import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { allNewsData, partNews } from "../../../DataNews/DataNews";
import News from "./News";

const AllNews = () => {
  const [allNews, setAllNews] = useState(allNewsData);
    const [divNews, setdivNews] = useState(partNews);

  return (
    <Container>
      <Row>
        <div className="col-8 col-md-8 col-sm-12 mt-4 p-0 pl-3">
          <Row>
            {divNews.map((news, index) => (
              <News key={index} news={news} />
            ))}
          </Row>
        </div>
      </Row>
    </Container>
  );
};

export default AllNews;
