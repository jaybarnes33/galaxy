import React from "react";
import { Container } from "react-bootstrap";

const Banner = ({ height, image, size, position, text }) => {
  return (
    <>
      <div className="banner">
        <Container>{text}</Container>
      </div>
      <style jsx>
        {`
          .banner {
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;

            padding-bottom: 30px;
            background-image: radial-gradient(
                circle farthest-corner at 10% 20%,
                rgba(90, 92, 106, 0.6) 0%,
                rgba(32, 45, 58, 0.6) 81.3%
              ),
              url(${image});
            height: ${height};
            background-size: ${size};
            background-position: ${position};
          }
        `}
      </style>
    </>
  );
};

export default Banner;
