import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaPencilRuler } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { HiCodeBracketSquare } from "react-icons/hi2";
import mobileapp from "../../Assets/Images/mobile_app.png";
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
                    <h4 className="title">Graphic Design</h4>
                    <h5 className="description pt-2">
                      Uma auctor sed dictum libero vestibulum orci a imperdiet
                      quisque nullam nam.
                    </h5>
                  </div>
                </div>
              </Card>
              <Card className="second-card mt-4">
                <div className="first-div p-4">
                  <MdBarChart className="i-1"/>
                  <div className="content mt-5">
                  <h4 className="title">Online Marketing</h4>
                  <h5 className="description pt-2">
                    Uma auctor sed dictum libero vestibulum orci a imperdiet
                    quisque nullam nam.
                  </h5>
                </div>
                </div>

              </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="se-col">
              <Card className="third-card">
                <div className="first-div px-4 pt-4">
                <div className="content">

                  <h4 className="title">Mobile App Developments</h4>
                  <h5 className="description pt-2">
                    Uma auctor sed dictum libero vestibulum orci a imperdiet
                    quisque nullam nam.
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

                  <h4 className="title">Cyber Security</h4>
                  <h5 className="description pt-2">
                    Uma auctor sed dictum libero vestibulum orci a imperdiet
                    quisque nullam nam.
                  </h5>
                </div>
                </div>
                
              </Card>
              <Card className="fifth-card mt-4">
                <div className="first-div p-4">
                  <BiCodeBlock className="i-1" />
                  <div className="content mt-5">

                  <h4  className="title">Website Development</h4>
                  <h5 className="description pt-2">
                    Uma auctor sed dictum libero vestibulum orci a imperdiet
                    quisque nullam nam.
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
