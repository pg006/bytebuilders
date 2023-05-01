import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaPencilRuler } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { RiShieldKeyholeFill } from "react-icons/ri";
import mobileapp from "../../assets/images/mobile_app.png";
import "./Offering.scss";
import { BiCodeBlock } from "react-icons/bi";

const Offering = () => {
  return (
    <React.Fragment>
      <div className="offering-main-div mt-5">
        <div className="container">
          <Row>
            <Col lg={4} md={6} sm={12} className="fi-col">
              <Card className="first-card">
                <div className="first-div p-4">
                  <FaPencilRuler className="i-1" />
                  <div className="content mt-5">
                    <h4 className="title">Software Development</h4>
                    <h5 className="description pt-2">
                    We offer custom software development services to businesses of all sizes. Our team has experience in developing a range of software applications including enterprise software, mobile apps, web applications, and more.
                    </h5>
                  </div>
                </div>
              </Card>
              <Card className="second-card mt-4">
                <div className="first-div p-4">
                  <MdBarChart className="i-1"/>
                  <div className="content mt-5">
                  <h4 className="title">Web Development</h4>
                  <h5 className="description pt-2">
                  Our team of experienced web developers creates responsive and user-friendly websites that are optimized for search engines. We use the latest web development technologies to deliver high-quality websites that meet the needs of our clients.
                  </h5>
                </div>
                </div>

              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="se-col">
              <Card className="third-card">
                <div className="first-div px-4 pt-4">
                <div className="content">

                  <h4 className="title">Mobile Application Development</h4>
                  <h5 className="description pt-2">
                  We specialize in developing mobile applications for iOS and Android platforms. Our team of experts uses the latest mobile app development technologies to create feature-rich and user-friendly mobile apps.
                  </h5>
                  <img src={mobileapp} alt="mobileapp" />
                </div>

                </div>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="th-col">
              <Card className="forth-card">
                <div className="first-div p-4">
                  <RiShieldKeyholeFill className="i-1" />
                  <div className="content mt-5">

                  <h4 className="title">Digital Marketing</h4>
                  <h5 className="description pt-2">
                  Our digital marketing services include search engine optimization, social media marketing, pay-per-click advertising, and more. We create customized digital marketing strategies that help businesses increase their online visibility and reach their target audience.
                  </h5>
                </div>
                </div>
                
              </Card>
              <Card className="fifth-card mt-4">
                <div className="first-div p-4">
                  <BiCodeBlock className="i-1" />
                  <div className="content mt-5">

                  <h4  className="title">Cloud Computing</h4>
                  <h5 className="description pt-2">
                  We offer cloud computing services that enable businesses to store, manage, and access their data and applications securely and efficiently. Our cloud solutions include cloud migration, cloud hosting, and cloud storage services.
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

export default Offering;
