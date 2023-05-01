import React from "react";
import "./System.scss";
import { Card, Col, Row } from "react-bootstrap";
import { BsPeopleFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { HiCurrencyDollar } from "react-icons/hi";

const System = () => {
  return (
    <React.Fragment>
      <div className="system-main-div">
        <div className="first-div">
          <h3>WHY CHOOSE US</h3>
          <div className="d-flex justify-content-center mt-4">
            <h1>Let us change the way you think about technology.</h1>
          </div>
        </div>
        <div className="second-div container">
          <Row className="card-row mt-5">
            <Col lg={3} md={6} sm={12} className="top-col pt-5">
              <Card className="first-card">
                <div className="first p-4">
                  <div className="d-flex justify-content-center">
                    <div className="icon-div d-flex justify-content-center align-items-center">
                      <BsPeopleFill className="i-1" />
                    </div>
                  </div>
                  <div className="content mt-5">
                    <h4 className="title">Customer Service</h4>
                    <h5 className="description pt-2">
                      We believe in building long-term relationships with our
                      clients. Our team provides excellent customer service and
                      support to ensure that our clients are satisfied with our
                      services.
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12} className="bottom-col">
              <Card className="second-card">
                <div className="first p-4">
                  <div className="d-flex justify-content-center">
                    <div className="icon-div d-flex justify-content-center align-items-center">
                      <FaMedal className="i-1" />
                    </div>
                  </div>
                  <div className="content mt-5">
                    <h4 className="title">Quality</h4>
                    <h5 className="description pt-2">
                      We are committed to delivering high-quality solutions that
                      exceed our clients' expectations. We use the latest
                      technologies and best practices to ensure that our
                      solutions are of the highest quality.
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12} className="top-col pt-5">
              <Card className="first-card">
                <div className="first p-4">
                  <div className="d-flex justify-content-center">
                    <div className="icon-div d-flex justify-content-center align-items-center">
                      <GiSkills className="i-1" />
                    </div>
                  </div>
                  <div className="content mt-5">
                    <h4 className="title">Expertise</h4>
                    <h5 className="description pt-2">
                      Our team of experienced developers, designers, and
                      marketers has the expertise to customized solutions that
                      meet the unique needs of each client.
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12} className="bottom-col">
              <Card className="second-card">
                <div className="first p-4">
                  <div className="d-flex justify-content-center">
                    <div className="icon-div d-flex justify-content-center align-items-center">
                      <HiCurrencyDollar className="i-1" />
                    </div>
                  </div>
                  <div className="content mt-5">
                    <h4 className="title">Affordable</h4>
                    <h5 className="description pt-2">
                      We offer competitive pricing for our services without
                      compromising on quality. We believe in providing value for
                      money to our clients.
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default System;
