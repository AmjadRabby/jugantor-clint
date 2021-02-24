import React from "react";
import { Container } from "react-bootstrap";
import NewsContainer from "../NewsContainer/NewsContainer";

const Upstairs = () => {
  return (
    <Container className="p-0 mt-4 mb-2">
      <ul className="nav border-bottom pb-2 mb-3">
        <li className="nav-item ">
          {" "}
          <h5 className="nav-link text-primary font-weight-bolder p-1 mb-0 mr-4">
            প্রতিমঞ্চ
          </h5>
        </li>
      </ul>
      <section className="">
        <NewsContainer title="upstairs" />
      </section>
    </Container>
  );
};

export default Upstairs;
