import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./GetinTouch.scss";
import {
  MdLocationOn,
  MdMarkEmailRead,
  MdMessage,
  MdWifiCalling3,
} from "react-icons/md";
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </h5>
          <hr />
          <h4 className="pt-2">Follow our social network</h4>
          <h5 className="pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
                    Varachha,
                  </h6>
                  <h6> Surat - 394101 </h6>
                </div>
              </Card>
            </Col>
            <Col lg={6} md={12} sm={12} className="second-card p-2">
              <Card>
                <div className="email-div p-3">
                  <MdMarkEmailRead className="i-1 mb-5" />
                  <h5>Caontact Us</h5>
                  <h6>info@bytebuildersinfotech.com</h6>
                  <h6>Phone : +917567673046</h6>
                </div>
              </Card>
            </Col>
          </Row>
          {/* <Row className="bottom-div">
            <Col lg={6} md={12} sm={12} className="first-card p-2">
              <Card>
                <div className="call-div p-3">
                  <MdWifiCalling3 className="i-1 mb-5" />
                  <h5>Call us</h5>
                  <h6>Phone : +917567673046</h6>
                  <h6>Fax : +917567673046</h6>
                </div>
              </Card>
            </Col>
            <Col lg={6} md={12} sm={12} className="second-card p-2">
              <Card>
                <div className="consult-div p-3">
                  <MdMessage className="i-1 mb-5" />
                  <h5>Free Consultations</h5>
                  <h6>Phone : +917567673046</h6>
                  <h6>Fax : +917567673046</h6>
                </div>
              </Card>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </div>
  );
};

export default GetinTouch;
