import React from "react";
import { Row, Col } from "react-bootstrap";
const Point = ({ title, icon, content }) => {
  return (
    <>
      <Row>
        <>
          {icon && <Col xs={2}>{icon}</Col>}{" "}
          <Col md={10}>
            <h4>{title}</h4>
            <p>{content}</p>
          </Col>{" "}
        </>
      </Row>
      <style jsx>
        {`
          h4 {
            color: red;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default Point;
