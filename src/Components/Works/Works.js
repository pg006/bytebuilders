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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </h1>
          </div>
        </div>
        <div className="second-div container">
          <Row className="mt-5">
            <Col lg={3} md={6} sm={12} className="pt-5">
              <Card className="first-card">
                <div className="first p-4">
                  <TbSquareRoundedNumber1Filled className="i-1" />
                  <div className="content mt-5">
                    <h4 className="title">Discover the product</h4>
                    <h5 className="description pt-2">
                      Leo himenaeos penatibus magnis platea nulla senectus
                      adipiscing ad imperdiet quam facilisis
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card className="second-card">
                <div className="first p-4">
                  <TbSquareRoundedNumber2Filled className="i-1" />
                  <div className="content mt-5">
                    <h4 className="title">Free Consultations</h4>
                    <h5 className="description pt-2">
                      Leo himenaeos penatibus magnis platea nulla senectus
                      adipiscing ad imperdiet quam facilisis
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12} className="pt-5">
              <Card className="first-card">
                <div className="first p-4">
                  <TbSquareRoundedNumber3Filled className="i-1" />
                  <div className="content mt-5">
                    <h4 className="title">Wireframe & Production</h4>
                    <h5 className="description pt-2">
                      Leo himenaeos penatibus magnis platea nulla senectus
                      adipiscing ad imperdiet quam facilisis
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card className="second-card">
                <div className="first p-4">
                  <TbSquareRoundedNumber4Filled className="i-1" />
                  <div className="content mt-5">
                    <h4 className="title">Prototype Application</h4>
                    <h5 className="description pt-2">
                      Leo himenaeos penatibus magnis platea nulla senectus
                      adipiscing ad imperdiet quam facilisis
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
