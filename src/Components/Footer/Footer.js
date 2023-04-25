import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.scss";
import logolight from "../../Assets/Images/Logo White.png";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-main-div">
      <div className="footer-div py-4">
        <div className="container second-div">
          <Row className="py-2">
            <Col lg={4} md={12} sm={12} className="pt-4 px-4">
              <div className="footer">
                <div className="logo d-flex">
                  <img src={logolight} alt="bytebuilders" />
                </div>
                <h5 className="my-3 description">
                  Mollis duis conubia phasellus iaculis hendrerit taciti. Ligula
                  morbi velit facilisis imperdiet si suscipit tristique netus
                  cursus.
                </h5>
              </div>
              <div className="icon-div my-3 d-flex">
                <div className="icon">
                  <FaFacebookF />
                </div>
                <div className="icon">
                  <BsInstagram />
                </div>
                <div className="icon">
                  <BsTwitter />
                </div>
                <div className="icon">
                  <AiFillYoutube />
                </div>
              </div>
            </Col>
            <Col lg={8} md={12} sm={12}>
              <Row className="information">
                <Col lg={4} md={4} sm={6} className="pt-4">
                  <h5>Services</h5>
                  <div className="service-div mt-4">
                    <Nav.Link eventKey="" className="name">
                      Cyber Security
                    </Nav.Link>
                    <Nav.Link eventKey="" className="name">
                      Database
                    </Nav.Link>
                    <Nav.Link eventKey="" className="name">
                      Cloud Service
                    </Nav.Link>
                    <Nav.Link eventKey="" className="name">
                      Mobile App
                    </Nav.Link>
                    <Nav.Link eventKey="" className="name">
                      Web Design
                    </Nav.Link>
                    <Nav.Link eventKey="" className="name">
                      Online Marketing
                    </Nav.Link>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={6} className="pt-4">
                  <h5>Support</h5>
                  <div className="service-div mt-4">
                    <Nav.Link eventKey="" className="name">
                      Help Center
                    </Nav.Link>
                    <Nav.Link eventKey="" className="name">
                      Ticket Support
                    </Nav.Link>
                    <Nav.Link eventKey="" className="name">
                      FAQ
                    </Nav.Link>
                    <Nav.Link eventKey="" className="name">
                      Contact Us
                    </Nav.Link>
                  </div>
                </Col>

                <Col lg={4} md={4} sm={6} className="pt-4">
                  <h5>Company</h5>
                  <div className="service-div mt-4">
                    <Nav.Link eventKey="" className="name">
                      About us
                    </Nav.Link>
                    <Nav.Link eventKey="" className="name">
                      Leadership
                    </Nav.Link>
                    <Nav.Link eventKey="" className="name">
                      Careers
                    </Nav.Link>
                    <Nav.Link eventKey="" className="name">
                      Article & News
                    </Nav.Link>
                    <Nav.Link eventKey="" className="name">
                      Legal Notice
                    </Nav.Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className="secon-div d-flex justify-content-between py-4 px-4">
        <div className="name-div">
          Copyright © 2023 techbiz, All rights reserved. Powered by MoxCreative.
        </div>
        <div className="link-div d-flex">
          <Nav.Link eventKey="" className="link-name mx-2">
            Term Of Use
          </Nav.Link>
          <Nav.Link eventKey="" className="link-name mx-2">
            Cookie Policy
          </Nav.Link>
          <Nav.Link eventKey="" className="link-name mx-2">
            Privacy Policy
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

