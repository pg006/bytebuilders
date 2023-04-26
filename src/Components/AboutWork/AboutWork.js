import React from "react";
import "./AboutWork.scss";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import { HiCurrencyDollar, HiLightBulb } from "react-icons/hi";
import { BsAsterisk, BsPeopleFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { GiBatteryPack, GiSkills } from "react-icons/gi";
import { TbChessQueenFilled, TbWorld } from "react-icons/tb";
import { BiCodeBlock } from "react-icons/bi";
const AboutWork = () => {
  return (
    <React.Fragment>
      <div className="about-work-main-div mx-5">
        <Row>
          <Col lg={6} md={12} sm={12}>
            <div className="first-div mt-3">
              <Card className="pb-5">
                <div className="card-div m-4 p-3">
                  <h1>Express everything and feel everything.</h1>
                  <h5>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </h5>
                  <div className="processbar-div">
                    <h2 className="mt-3">DESIGN GRAPHICS & 3D DESIGN</h2>
                    <ProgressBar now={87} label={`${87}%`} />
                    <h2 className="mt-3">MARKETING</h2>
                    <ProgressBar now={64} label={`${64}%`} />
                    <h2 className="mt-3">ANIMATIONS</h2>
                    <ProgressBar now={72} label={`${72}%`} />
                    <h2 className="mt-3">PROGRAMING</h2>
                    <ProgressBar now={91} label={`${91}%`} 
                    />
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
          <Row className="card-row">
            <Col lg={6} md={6} sm={12} className="top-col">
              <Card className="first-card mt-3">
                <div className="first p-4">
                  <div className="">
                      <HiLightBulb className="i-1" />
                  </div>
                  <div className="content mt-5">
                    <h4 className="title">Creative Team</h4>
                    <h5 className="description pt-2">
                    Bytebuilders Infotech provide creative and innovative solutions for businesses to optimize their IT infrastructure.
                    </h5>
                  </div>
                </div>
              </Card>
              <Card className="second-card mt-3">
                <div className="first p-4">
                  <div className="">
                      <TbWorld className="i-1" />
                  </div>
                  <div className="content mt-5">
                    <h4 className="title">Digital Marketing</h4>
                    <h5 className="description pt-2">
                    Bytebuilder Infotech may offer a full range of digital marketing services that are tailored to their clients' specific requirements
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>

            <Col lg={6} md={6} sm={12} className="top-col">
              <Card className="third-card mt-3">
                <div className="first p-4">
                  <div className="">
                      <BiCodeBlock className="i-1" />
                    </div>
                  <div className="content mt-5">
                    <h4 className="title">IOT & Programing</h4>
                    <h5 className="description pt-2">
                    Bytebuilders Infotech might offer IoT answers for help organizations coordinate and sensors for better information investigation.
                    </h5>
                  </div>
                </div>
              </Card>

              <Card className="forth-card mt-3">
                <div className="first p-4">
                  <div className="">
                      <TbChessQueenFilled className="i-1" />
                  </div>
                  <div className="content mt-5">
                    <h4 className="title">Affordable</h4>
                    <h5 className="description pt-2">
                    Bytebuilders Infotech may offer scalable solutions that can grow with the needs of its clients.
                    </h5>
                  </div>
                </div>
              </Card>
            </Col>
 
          </Row>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default AboutWork;
