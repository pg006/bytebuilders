import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="portfolio-main-div container my-5 py-4">
        <div className="first-div">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="title-div mx-3">
                <h3>PORTFOLIO</h3>
                <div className="d-flex justify-content-center mt-4">
                  <h1>Innovation is the core of everything we do.</h1>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h5 className="desc mx-3">
              They may have developed web applications using recent technologies such as Angular, React, Vue.js, and Node.js. They may have worked on a variety of web applications, such as e-commerce websites, online marketplaces, and online booking systems.
              </h5>
              <button className="get-start-btn mt-3">Learn More</button>
            </Col>
          </Row>
        </div>
        <div className="second-div mt-5">
          <Row>
            <Col lg={4} md={4} sm={12} classNamw='first-col'>
              <Card className="first-card">
                <div className="deliver-div p-4">
                  <div className="content-div">
                    <h1>SOFTWARE DEVELOPMENT</h1>
                    <p className="mt-3">At bytebuilders, we provide custom software development services to help businesses of all sizes transform their ideas into reality. Our team of expert developers uses the latest technologies and best practices to create high-quality software applications that meet the unique needs of our clients.</p>
                    <button className="discover-btn mt-5">View detail</button>
                  </div>
                </div>
              </Card>
              <Card className="second-card mt-3">
                <div className="deliver-div p-4">
                  <div className="content-div">
                    <h1>WEB DEVELOPMENT:</h1>
                    <p className="mt-3">At bytebuilders, we specialize in creating responsive and user-friendly websites that are optimized for search engines. Our team of experienced web developers uses the latest web development technologies to deliver high-quality websites that meet the needs of our clients.</p>
                    <button className="discover-btn mt-5">View detail</button>
                  </div>
                </div>
              </Card>

            </Col>
            <Col lg={4} md={4} sm={12} className="second-col mt-5 pt-5">
              <Card className="third-card">
                <div className="deliver-div p-4">
                  <div className="content-div">
                    <h1>MOBILE APPLICATION DEVELOPMENT</h1>
                    <p className="mt-3">At bytebuilders, we offer mobile application development services for iOS and Android platforms. Our team of expert mobile app developers creates feature-rich and user-friendly mobile apps that help businesses engage with their customers on-the-go.</p>
                    <button className="discover-btn mt-5">View detail</button>
                  </div>
                </div>
              </Card>
              <Card className="fourth-card mt-3">
                <div className="deliver-div p-4">
                  <div className="content-div">
                    <h1>DIGITAL MARKETING:</h1>
                    <p className="mt-3">At bytebuilders, we provide digital marketing services to help businesses increase their online visibility and reach their target audience. Our team of expert digital marketers creates customized digital marketing strategies that deliver results.</p>
                    <button className="discover-btn mt-5">View detail</button>
                  </div>
                </div>
              </Card>

            </Col>
            <Col lg={4} md={4} sm={12} className="third-col">
              <Card className="fifth-card">
                <div className="deliver-div p-4">
                  <div className="content-div">
                    <h1>CLOUD COMPUTING:</h1>
                    <p className="mt-3">At bytebuilders, we offer cloud computing services that help businesses store, manage, and access their data and applications securely and efficiently. Our cloud solutions include cloud migration, cloud hosting, and cloud storage services.</p>
                    <button className="discover-btn mt-5">View detail</button>
                  </div>
                </div>
              </Card>
              <Card className="sixth-card mt-3">
                <div className="deliver-div p-4">
                  <div className="content-div">
                    <h1>GRAPHICS DESIGN</h1>
                    <p className="mt-3"> Create advertisements for ByteBuilders that can be placed on other websites or in print publications. These ads could be designed to promote specific products or services, or simply to raise awareness of the brand.</p>
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

