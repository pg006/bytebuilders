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
      <div className="services-main-div px-2">
        <div className="service-div container">
          <Row>
            <Col lg={6} className="first-col">
              <h6 className="our-service">OUR SERVICES</h6>
              <h2 className="let-us">
                Let us do the work, so you can focus on what matters.
              </h2>
              <h5 className="lorem my-3">
              At ByteBuilders Infotech, we are committed to providing innovative and cutting-edge solutions to our clients. We believe in using technology to solve real-world problems and help businesses achieve their goals.
              </h5>
              <div className="icon-div py-2 d-flex">
                <div className="icon d-flex justify-content-center align-items-center">
                  <HiLightBulb className="icon-1" />
                </div>
                <div className="content-div">
                  <h3 className="content-title">Creative Solutions</h3>
                  <h5 className="content-desc">
                  Bytebuilders Infotech provide creative and innovative solutions for businesses to optimize their IT infrastructure.
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
                  Bytebuilder Infotech may offer a full range of digital marketing services that are tailored to their clients' specific requirements
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
                  Bytebuilders Infotech might offer IoT answers for help organizations coordinate and interface different gadgets and sensors for better information investigation and independent direction.
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
