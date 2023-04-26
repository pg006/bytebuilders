import React from "react";
import { Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import './SendMessage.scss';

const SendMessage = () => {
  return (
    <div className="message-main-div container pt-5">
      <Card className="p-5">
        <h1 className="d-flex justify-content-center pt-4">Send Us A Message</h1>
        <h5 className="d-flex justify-content-center pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </h5>
        <Row className="pt-4">
          <Col lg={6} md={6} sm={12}>
            <Form.Group className="">
              <Form.Label>Name</Form.Label>
              <Form.Control  placeholder="Name" />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Form.Group className="">
              <Form.Label>Company</Form.Label>
              <Form.Control placeholder="Company" />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Form.Group className="">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Form.Group className="">
              <Form.Label>Phone</Form.Label>
              <Form.Control placeholder="Phone" />
            </Form.Group>
          </Col>
          <Col lg={12} md={12} sm={12}>
            <Form.Group className="">
              <Form.Label>Subject</Form.Label>
              <Form.Control  placeholder="Subject" />
            </Form.Group>
          </Col>
          <Col lg={12} md={12} sm={12}>
          <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Message"
                style={{ height: "100px" }}
              />
          </Col>
          <div className="btn-div d-grid pt-3">
            <button className="send-btn">Send Message</button>
          </div>
        </Row>
      </Card>
    </div>
  );
};

export default SendMessage;
