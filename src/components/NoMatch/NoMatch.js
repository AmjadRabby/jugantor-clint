import React from "react";
import { Container } from "react-bootstrap";

const NoMatch = () => {
  return (
    <Container className="text-center text-secondary mt-5 pb-4 mb-5">
      <h2>
        {" "}
        Invalid Route <small className="d-block mt-3"> 404 Failed!!!</small>
      </h2>
    </Container>
  );
};

export default NoMatch;
