import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Solutions.scss";
import aboutus from '../../Assets/Images/aboutus.jpg'
const Solutions = () => {
    return (
        <React.Fragment>
            <div className="solutions-main-div">
                <div className="second-div">
                    <Row className="row-div py-5 mx-5">
                        <Col lg={6}>
                            <div className="content-div my-5 pb-5">
                                <Row>
                                    <h6>WHO WE ARE</h6>
                                    <h1 className="mt-2">
                                        Delivering IT solutions that enable you to work smarter.
                                    </h1>
                                    <h5 className="mt-2">
                                        Parturient a tempor nam viverra luctus rhoncus taciti hac.
                                        Sapien mattis eu luctus montes volutpat nec odio. Posuere
                                        suspendisse commodo tempus molestie quis praesent curae
                                        sagittis placerat ridiculus tellus.
                                    </h5>
                                    <div className="buttons-div d-flex justify-content-start mt-3">
                                        <Button className="buy-button" variant="#8c8cda">
                                           Learn More
                                        </Button>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="image-div">
                            <img src={aboutus} alt="aboutus" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Solutions;
