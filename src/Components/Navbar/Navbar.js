import React, { useState } from "react";
import { Button, Nav, Navbar, Row } from "react-bootstrap";
import "./Navbar.scss";
import LogoDark from "../../assets/images/Logo White.png";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";

const NavBar = (props) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <div className="navbar-main-div">
        <div className="navbar-second-div">
          <div className="nav-bar-div">
            <Navbar>
              <div className="navbar-logo-div d-flex justify-content-between w-100 mx-5">
                <img src={LogoDark} alt="logo" />
                <div className="menu-icon" onClick={handleClick}>
                  {active ? <AiOutlineClose /> : <VscThreeBars />}
                </div>
                <Navbar.Toggle />
                <Nav className="nav-item mt-3">
                  <div className={active ? "nav-menu active" : "nav-menu"}>
                    <Nav.Link href="/">HOMEPAGE</Nav.Link>
                    <Nav.Link href="/aboutus">ABOUT US</Nav.Link>

                    <Nav.Link href="/contactus">CONTACT US</Nav.Link>
                  </div>
                  <button className="get-start-btn">Get Started</button>
                </Nav>
              </div>
            </Navbar>
          </div>
          <div className="second-div container">
            <Row className="py-5 mx-4">
              {props.isDelete ? (
                <div className="content-div my-5 pb-5">
                  <Row>
                    <h6 className="d-flex justify-content-center">
                      START YOUR DIGITAL BUSINESS
                    </h6>
                    <h1 className="mt-2 d-flex justify-content-center text-center">
                      Building A Smarter Tomorrow,{" "}
                    </h1>
                    <h1 className="d-flex justify-content-center text-center">
                      One Byte At A Time
                    </h1>
                    <h5 className="mt-2 d-flex justify-content-center text-center">
                      ByteBuilders Infotech is a tech company that offers a
                      range of services including software development, web
                      development, mobile application development, digital
                      marketing, cloud computing, and more. Here is some content
                      that you can use on your ByteBuilders Infotech website:
                    </h5>
                  </Row>
                  <Row>
                    <div className="buttons-div d-flex justify-content-center mt-3">
                      <Button className="buy-button" variant="#8c8cda">
                        Get Started
                      </Button>
                      <Button className="sell-button" variant="#8c8cda">
                        Learn More
                        <BsArrowRightShort className="icon" />
                      </Button>
                    </div>
                  </Row>
                </div>
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  <div className="about-div-div my-5">
                    {props.content ? (
                      <div>
                        <h1 className="about-title d-flex justify-content-center">
                          About us
                        </h1>
                        <h5 className="about-desc mt-4 d-flex justify-content-center text-center">
                          At ByteBuilders Infotech, we are committed to
                          providing innovative and cutting-edge solutions to our
                          clients. We believe in using technology to solve
                          real-world problems and help businesses achieve their
                          goals. Our team of skilled developers, designers, and
                          marketers work together to create customized solutions
                          that meet the unique needs of each client.
                        </h5>
                      </div>
                    ) : (
                      <div>
                        <h1 className="about-title d-flex justify-content-center">
                          contact us
                        </h1>
                        <h5 className="about-desc mt-4 d-flex justify-content-center text-center">
                                    Bytebuilder Infotech is a software development company based in India. They provide a range of services including software development, web development, mobile app development, and digital marketing. Here is the contact information I was able to find for them:
                        </h5>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
