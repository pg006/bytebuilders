import React from "react";
import "./Testmonials.scss";
import { Carousel, Row } from "react-bootstrap";
import Slider from "../../Common/Slider/Slider";

const Testmonials = () => {
  return (
    <React.Fragment>
      <div className="testmonials-main-div">
        <Row className="p-0">
          <h3>TESTIMONIAL</h3>
          <div className="d-flex justify-content-center mt-2">
            <h1>What they say about us</h1>
          </div>
          <div className="d-flex justify-content-center">
            <h5 className="title-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </h5>
          </div>
        </Row>
        <Row className="m-0">
          <Carousel>
            <Carousel.Item>
              <Slider />
            </Carousel.Item>
            <Carousel.Item>
              <Slider />
            </Carousel.Item>
            <Carousel.Item>
              <Slider />
            </Carousel.Item>
          </Carousel>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Testmonials;

// <div className='desc-div d-flex justify-content-center'>
// <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h5>
// </div>
