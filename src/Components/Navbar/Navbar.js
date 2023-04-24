import React from "react";
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

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="navbar-main-div">
        <div className="nav-bar-div">
          <Navbar>
            <div className="d-flex justify-content-between w-100 mx-5">
              <Navbar.Brand href="#home">
                <img src={LogoDark} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle />
              <Nav className="nav-item mt-3">
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
                  <h1 className="mt-2">We make IT simple, faster, and less expensive.</h1>
                  <h5 className="mt-2">
                    Vivamus morbi nisi natoque finibus facilisis. Risus
                    scelerisque ipsum senectus vitae pulvinar phasellus fames.
                  </h5>
                </Row>
                <Row>
                  <div className="d-flex justify-content-start mt-3">
                    <Button className="buy-button" variant="#8c8cda">
                    Get Started
                    </Button>
                    <Button className="sell-button" variant="#8c8cda">
                    Learn More 
                    <BsArrowRightShort className="icon"/>
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
