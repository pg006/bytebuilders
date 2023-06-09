import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./GetinTouch.scss";
import { MdLocationOn, MdMarkEmailRead } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";

const GetinTouch = () => {
  return (
    <div className="get-touch-main container">
      <Row className="pt-5 mt-4">
        <Col lg={6} md={6} sm={12} className="left-part">
          <h6 className="pt-3">GET IN TOUCH</h6>
          <h3 className="pt-3">
            Don't hesitate to contact us for more information
          </h3>
          <h5 className="pt-3">
            You can use any of the above methods to get in touch with
            Bytebuilders Infotech, whether you have a question about their
            services, want to request a quote, or just want to learn more about
            the company.
          </h5>
          <hr />
          <h4 className="pt-2">Follow our social network</h4>
          <h5 className="pt-3">
            You can follow Bytebuilders Infotech on any of these social networks
            to stay up-to-date with their latest news, updates, and services.
          </h5>

          <div className="icon-div my-3 d-flex pt-4">
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
        <Col lg={6} md={6} sm={12} className="right-part">
          <Row className="top-div pt-5 mt-5">
            <Col lg={6} md={12} sm={12} className="first-card p-2">
              <Card>
                <div className="head-div p-3">
                  <MdLocationOn className="i-1 mb-5" />
                  <h5 className="">Head Office</h5>
                  <h6>
                    319, Platinum Point Opp CNG Pump, Sudama Chowk, Mota
                    Varachha
                  </h6>
                  <h6> Surat - 394101 </h6>
                </div>
              </Card>
            </Col>
            <Col lg={6} md={12} sm={12} className="second-card p-2">
              <Card>
                <div className="email-div p-3">
                  <MdMarkEmailRead className="i-1 mb-5" />
                  <h5>Contact Us</h5>
                  <h6>Mail : <a href = "mailto: info@bytebuildersinfotech.com">info@bytebuildersinfotech.com</a> </h6>
                  <h6>Phone : <a href="tel:+9175676 73046">+9175676 73046</a></h6>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default GetinTouch;
