import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";
import "./Navbar.scss";
import LogoDark from "../../Assets/Images/Logo White.png";
import { BsArrowRightShort } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";


const NavBar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <React.Fragment>
      <div className="navbar-main-div">
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
                  <Nav.Link href="#about">HOMEPAGE</Nav.Link>
                  <Nav.Link href="#pricing">ABOUT US</Nav.Link>
                  <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                    <NavDropdown.Item href="">SINGLE SERVICES </NavDropdown.Item>
                    <NavDropdown.Item href="">PRICING PLAN</NavDropdown.Item>
                    <NavDropdown.Item href="">PORTFOLIO</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#contact">CONTACT US</Nav.Link>
                  <NavDropdown title="PAGES" id="basic-nav-dropdown">
                    <NavDropdown.Item href="">TEAM</NavDropdown.Item>
                    <NavDropdown.Item href="">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="">BLOG</NavDropdown.Item>
                    <NavDropdown.Item href="">SINGLE POST</NavDropdown.Item>
                    <NavDropdown.Item href="">ERROR 404</NavDropdown.Item>
                  </NavDropdown>
                </div>
                <button className="get-start-btn">Get Started</button>

              </Nav>
            </div>
          </Navbar>
        </div>
        <div className="second-div container">
          <Row className="py-5 mx-4">
            <Col lg={6}>
              <div className="content-div my-5 pb-5">
                <Row>
                  <h6>START YOUR DIGITAL BUSINESS</h6>
                  <h1 className="mt-2">Building A Smarter Tomorrow, One Byte At A Time</h1>
                  <h5 className="mt-2">
                  ByteBuilders Infotech is a tech company that offers a range of services including software development, web development, mobile application development, digital marketing, cloud computing, and more. Here is some content that you can use on your ByteBuilders Infotech website:
                  </h5>
                </Row>
                <Row>
                  <div className="buttons-div d-flex justify-content-start mt-3">
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
            </Col>
            <Col lg={6}>Images</Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
