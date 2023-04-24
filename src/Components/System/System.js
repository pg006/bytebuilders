import React from "react";
import "./System.scss";
import { Card, Col, Row } from "react-bootstrap";
import { BsFillFileLock2Fill, BsPeopleFill } from "react-icons/bs";
import { BiHeadphone } from "react-icons/bi";

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
          <Row className="mt-5">
            <Col lg={3} md={6} sm={12} className="pt-5">
              <Card className="first-card">
                <div className="first p-4">
                  <div className="d-flex justify-content-center">
                    <div className="icon-div d-flex justify-content-center align-items-center">
                      <BsFillFileLock2Fill className="i-1" />
                    </div>
                  </div>
                  <div className="content mt-5">
                    <h4 className="title">Smart & secure system</h4>
                    <h5 className="description pt-2">
                      Dui gravida integer commodo cursus ante vehicula lobortis
                      quam dis at tristique.
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card className="second-card">
                <div className="first p-4">
                  <div className="d-flex justify-content-center">
                    <div className="icon-div d-flex justify-content-center align-items-center">
                      <BsPeopleFill className="i-1" />
                    </div>
                  </div>
                  <div className="content mt-5">
                    <h4 className="title">Professional team</h4>
                    <h5 className="description pt-2">
                      Dui gravida integer commodo cursus ante vehicula lobortis
                      quam dis at tristique.
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12} className="pt-5">
              <Card className="first-card">
                <div className="first p-4">
                  <div className="d-flex justify-content-center">
                    <div className="icon-div d-flex justify-content-center align-items-center">
                      <BiHeadphone className="i-1" />
                    </div>
                  </div>
                  <div className="content mt-5">
                    <h4 className="title">Certified Expert</h4>
                    <h5 className="description pt-2">
                      Dui gravida integer commodo cursus ante vehicula lobortis
                      quam dis at tristique.
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card className="first-card">
                <div className="first p-4">
                  <div className="d-flex justify-content-center">
                    <div className="icon-div d-flex justify-content-center align-items-center">
                      <BiHeadphone className="i-1" />
                    </div>
                  </div>
                  <div className="content mt-5">
                    <h4 className="title">24/7 Premium Support</h4>
                    <h5 className="description pt-2">
                      Dui gravida integer commodo cursus ante vehicula lobortis
                      quam dis at tristique.
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
