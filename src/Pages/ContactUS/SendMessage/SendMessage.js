import React from "react";
import { Card, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import './SendMessage.scss';
import './sendmail.php';

import { useState } from "react";



const SendMessage = () => {

  // const [name, setName] = useState("");

//   const handleChange = (e) => {
//     setName(e.target.value);
// };
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    setInputs(values => ({...values, [name]: value}))
  }

  const sendmail = () => {
    console.log("test",inputs);
    // const data = {
    //   message: "test",
    //   to: "kenilbarvaliya@gmail.com",
    //   subject: "test",
    //   headers: "test"
    // }

    // var xhr = new XMLHttpRequest();

    // xhr.open('GET', 'http://api.ruvictor.com/sendemail/index.php?sendto=' + data.to + '&name=' + data.subject + '&message=' + data.message);
    // xhr.send()
  };

  return (
    <div className="message-main-div container pt-5">
      <Card className="p-5">
        <h1 className="d-flex justify-content-center pt-4">Send Us A Message</h1>
        <h5 className="d-flex justify-content-center pt-3">
          If you want to know more about us then leave a message here.
        </h5>
        <Row className="pt-4">
          {/* <Form> */}
          <Col lg={6} md={6} sm={12}>
            <Form.Group className="">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Name"  value={inputs.name} onChange={handleChange}/>
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
              <Form.Control placeholder="Subject" />
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
          {/* </Form> */}

          <div className="btn-div d-grid pt-3">
            <button className="send-btn" onClick={() => sendmail()}>Send Message</button>
          </div>
        </Row>
      </Card>
    </div>
  );
};

export default SendMessage;
