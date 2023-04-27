import React from "react";
import "./Founders.scss";
import { Card, Col, Row } from "react-bootstrap";
import per_1 from "../../Assets/Images/per-1.jpg";
import per_2 from "../../Assets/Images/per-2.jpg";
import per_3 from "../../Assets/Images/per-3.jpg";
import per_4 from "../../Assets/Images/per-4.jpg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
const Founders = () => {
  return (
    <React.Fragment>
      <div className="founders-main-div my-5 py-5">
        <div className="content-div d-flex justify-content-center align-items-center">
          <h1>Awesome people behind us.</h1>
          <h6>
          The leadership team at Bytebuilders Infotech is made up of seasoned professionals who have decades of experience in the technology industry. 
          </h6>
        </div>
        <div className="founder-div container">
          <Row>
            <Col lg={3} md={6} sm={12}>
              <Card>
                <img variant="top" src={per_1} />
                <Card.Body>
                  <div className="card-div">
                    <div className="icon-div my-2 d-flex justify-content-center">
                      <div className="icon">
                        <FaFacebookF />
                      </div>
                      <div className="icon">
                        <AiOutlineLinkedin />
                      </div>
                      <div className="icon">
                        <MdEmail />
                      </div>
                    </div>
                    <h4 className="d-flex justify-content-center">
                      Mohammad Shelton
                    </h4>
                    <h6 className="d-flex justify-content-center">FOUNDER</h6>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card>
                <img variant="top" src={per_2} />
                <Card.Body>
                  <div className="card-div">
                    <div className="icon-div my-2 d-flex justify-content-center">
                      <div className="icon">
                        <FaFacebookF />
                      </div>
                      <div className="icon">
                        <AiOutlineLinkedin />
                      </div>
                      <div className="icon">
                        <MdEmail />
                      </div>
                    </div>
                    <h4 className="d-flex justify-content-center">
                      Kayden Richards
                    </h4>
                    <h6 className="d-flex justify-content-center">
                      CO-FOUNDER
                    </h6>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <Card>
                <img variant="top" src={per_3} />
                <Card.Body>
                  <div className="card-div">
                    <div className="icon-div my-2 d-flex justify-content-center">
                      <div className="icon">
                        <FaFacebookF />
                      </div>
                      <div className="icon">
                        <AiOutlineLinkedin />
                      </div>
                      <div className="icon">
                        <MdEmail />
                      </div>
                    </div>
                    <h4 className="d-flex justify-content-center">
                      Olivia Rogers
                    </h4>
                    <h6 className="d-flex justify-content-center">
                      GRAPHICS DESIGNER
                    </h6>
                  </div>
                </Card.Body>
              </Card>
            </Col>{" "}
            <Col lg={3} md={6} sm={12}>
              <Card>
                <img variant="top" src={per_4} />
                <Card.Body>
                  <div className="card-div">
                    <div className="icon-div my-2 d-flex justify-content-center">
                      <div className="icon">
                        <FaFacebookF />
                      </div>
                      <div className="icon">
                        <AiOutlineLinkedin />
                      </div>
                      <div className="icon">
                        <MdEmail />
                      </div>
                    </div>
                    <h4 className="d-flex justify-content-center">
                      Maisy Holland
                    </h4>
                    <h6 className="d-flex justify-content-center">
                      3D DESIGNER
                    </h6>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Founders;
