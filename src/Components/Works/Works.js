import React from "react";
import "./Works.scss";
import { Card, Col, Row } from "react-bootstrap";
import {
  TbSquareRoundedNumber1Filled,
  TbSquareRoundedNumber2Filled,
  TbSquareRoundedNumber3Filled,
  TbSquareRoundedNumber4Filled,
} from "react-icons/tb";
const Works = () => {
  return (
    <React.Fragment>
      <div className="works-main-div my-5 py-5">
        <div className="first-div">
          <h3>How it works</h3>
          <div className="d-flex justify-content-center">
            <h1>
              In the discovery phase, Bytebuilders Infotech works closely with
              clients to understand their specific needs and requirements.
            </h1>
          </div>
        </div>
        <div className="second-div container">
          <Row className="mt-5 mx-2">
            <Col lg={3} md={6} sm={12} className="bottom-col pt-5">
              <Card className="first-card">
                <div className="first p-4">
                  <TbSquareRoundedNumber1Filled className="i-1" />
                  <div className="content mt-5">
                    <h4 className="title">Discover the product</h4>
                    <h5 className="description pt-2">
                      Bytebuilders Infotech provides custom software development
                      services that are tailored to the specific needs of
                      clients.
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12} className="top-col">
              <Card className="second-card">
                <div className="first p-4">
                  <TbSquareRoundedNumber2Filled className="i-1" />
                  <div className="content mt-5">
                    <h4 className="title">Free Consultations</h4>
                    <h5 className="description pt-2">
                      we conducts rigorous testing and quality assurance to
                      ensure that the software solution is free from bugs,
                      errors, and security vulnerabilities
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12} className="bottom-col pt-5">
              <Card className="first-card">
                <div className="first p-4">
                  <TbSquareRoundedNumber3Filled className="i-1" />
                  <div className="content mt-5">
                    <h4 className="title">Wireframe & Production</h4>
                    <h5 className="description pt-2">
                      We creates a blueprint of the software solution. our work
                      closely with the client to develop a clear understanding.
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12} className="top-col">
              <Card className="second-card">
                <div className="first p-4">
                  <TbSquareRoundedNumber4Filled className="i-1" />
                  <div className="content mt-5">
                    <h4 className="title">Prototype Application</h4>
                    <h5 className="description pt-2">
                      During the conceptualization phase, Bytebuilders Infotech
                      works closely with the client to develop a clear
                      understanding of their needs, goals, and objectives.
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

export default Works;
