import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="portfolio-main-div container my-5 py-4">
        <div className="first-div">
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="title-div">
                <h3>PORTFOLIO</h3>
                <div className="d-flex justify-content-center mt-4">
                  <h1>Innovation is the core of everything we do.</h1>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <h5 className="desc">
                Sociosqu aenean facilisis fermentum aliquam velit sapien. Dictum
                conubia eget curae massa nunc. Mollis nascetur platea aenean
                curae mi ultrices primis torquent euismod.
              </h5>
              <button className="get-start-btn mt-3">Learn More</button>
            </Col>
          </Row>
        </div>
        <div className="second-div mt-5">
          <Row>
            <Col lg={4} md={4} sm={12}>
              <Card className="first-card">
                <div className="deliver-div p-4">
                  <div className="content-div">
                    <h1>DIGITAL BRANDING</h1>
                    <h6 className="mt-3">Loka Perfume & Co</h6>
                    <button className="discover-btn mt-5">View detail</button>
                  </div>
                </div>
              </Card>
              <Card className="first-card mt-3">
              <div className="deliver-div p-4">
                <div className="content-div">
                  <h1>DIGITAL MARKETING</h1>
                  <h6 className="mt-3">Ludwig Smartwatch</h6>
                  <button className="discover-btn mt-5">View detail</button>
                </div>
              </div>
            </Card>
           
            </Col>
            <Col lg={4} md={4} sm={12} className="mt-5 pt-5">
            <Card className="first-card">
              <div className="deliver-div p-4">
                <div className="content-div">
                  <h1>WEBSITE</h1>
                  <h6 className="mt-3">Furneta Store</h6>
                  <button className="discover-btn mt-5">View detail</button>
                </div>
              </div>
            </Card>
            <Card className="first-card mt-3">
            <div className="deliver-div p-4">
              <div className="content-div">
                <h1>DIGITAL  BRANDING</h1>
                <h6 className="mt-3">Zeus Smartwatch</h6>
                <button className="discover-btn mt-5">View detail</button>
              </div>
            </div>
          </Card>
          
          </Col>
          <Col lg={4} md={4} sm={12}>
          <Card className="first-card">
            <div className="deliver-div p-4">
              <div className="content-div">
                <h1>WEBSITE</h1>
                <h6 className="mt-3">Jacko Classical Textile</h6>
                <button className="discover-btn mt-5">View detail</button>
              </div>
            </div>
          </Card>
          <Card className="first-card mt-3">
          <div className="deliver-div p-4">
            <div className="content-div">
              <h1>GRAPHICS DESIGN</h1>
              <h6 className="mt-3">Monica Coffee</h6>
              <button className="discover-btn mt-5">View detail</button>
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

export default Portfolio;
