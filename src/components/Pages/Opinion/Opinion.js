import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NewsContainer from "../NewsContainer/NewsContainer";
import "./Opinion.css";



const Opinion = () => {
  return (
    <Container className="p-0 mt-4 mb-2">
      <ul className="nav border-bottom sm-hide-element pb-2 mb-3">
        <li className="nav-item ">
          {" "}
          <h5 className="nav-link text-primary font-weight-bolder p-1 mb-0 mr-4">
            বাতায়ন
          </h5>
        </li>
      </ul>

      
      <section className="">
        <NewsContainer title="opinion" />
      </section>
    </Container>
  );
};

export default Opinion;
