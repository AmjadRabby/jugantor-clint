import React from "react";
import { Container } from "react-bootstrap";
import NewsContainer from "../NewsContainer/NewsContainer";
import "./Capital.css";

const Capital = () => {
  return (
    <Container className="p-0 mt-4 mb-2">
      <ul className="nav border-bottom pb-2 mb-3">
        <li className="nav-item ">
          {" "}
          <h5 className="nav-link text-primary font-weight-bolder p-1 mb-0 mr-4">
            রাজধানী
          </h5>
        </li>
      </ul>
      <section className="">
        <NewsContainer title="capital" />
      </section>
    </Container>
  );
};

export default Capital;
