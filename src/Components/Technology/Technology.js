import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Technology.scss";
import mobile from "../../Assets/Images/mobile_app.png";
import desktop from "../../Assets/Images/desktop_img.png";
const Technology = () => {
  return (
    <React.Fragment>
      <div className="technology-main-div px-3 container">
        <Row className="m-0">
          <h3>WHAT WE DO</h3>
          <div className="d-flex justify-content-center">
            <h1>Let us change the way you think about technology.</h1>
          </div>
        </Row>
        <Row className="m-0">
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="boxs">
              <div className="box px-4 pt-4">
                <h2>Mobile Application Development</h2>
                <h4>
                  Bytebuilder Infotech believes that a good user experience is
                  key to the success of any mobile app.
                </h4>
                <img src={mobile} alt="mobile" />
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="boxs">
              <div className="box px-4 pt-4">
                <h2>Desktop Application Development & Website</h2>
                <h4>
                  Bytebuilders Infotech provides custom desktop application
                  development services for businesses of all sizes.
                </h4>
                <img src={desktop} alt="desktop"  className="img-2"/>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12}>
            <div className="boxs">
              <div className="box px-4 pt-4">
                <h2>Digital Marketing & Branding</h2>
                <h4>
                  Bytebuilders Infotech offers digital marketing services to
                  help businesses increase their online visibility, drive
                  traffic.
                </h4>
                <img src={desktop} alt="link" className="img-2"/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Technology;
