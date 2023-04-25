import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Services.scss";
import { HiLightBulb } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import desktop from "../../Assets/Images/desktop_img.png";
import { BiCodeBlock } from "react-icons/bi";

const Services = () => {
  return (
    <React.Fragment>
      <div className="services-main-div">
        <div className="service-div container">
          <Row>
            <Col lg={6} className="first-col">
              <h6 className="our-service">OUR SERVICES</h6>
              <h2 className="let-us">
                Let us do the work, so you can focus on what matters.
              </h2>
              <h5 className="lorem my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </h5>
              <div className="icon-div py-2 d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <HiLightBulb className="icon-1" />
                </div>
                <div className="content-div">
                  <h3 className="content-title">Creative Solutions</h3>
                  <h5 className="content-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </h5>
                </div>
              </div>
              <div className="icon-div py-2 d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <TbWorld className="icon-1" />
                </div>
                <div className="content-div">
                  <h3 className="content-title">Digital Marketing</h3>
                  <h5 className="content-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </h5>
                </div>
              </div>
              <div className="icon-div py-2 d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <BiCodeBlock className="icon-1" />
                </div>
                <div className="content-div">
                  <h3 className="content-title">IOT & Programing</h3>
                  <h5 className="content-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </h5>
                </div>
              </div>
            </Col>
            <Col lg={6} className="second-col">
              <div className="image-div">
                <img src={desktop} className="my-5" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
