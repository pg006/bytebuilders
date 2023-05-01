import React, { useState } from "react";
import { Collapse } from "@mui/material";
import { Alert, Button, Card, Form, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import U15 from '../../assets/images/UserImages/U15.jpg'
import U16 from '../../assets/images/UserImages/U16.jpg'
import U17 from '../../assets/images/UserImages/U17.jpg'
import U19 from '../../assets/images/UserImages/U19.jpg'
import U18 from '../../assets/images/UserImages/U18.jpg'
import U20 from '../../assets/images/UserImages/U20.jpg'

// CONTACT CARD 1

export const ContactCard1 = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card className="border p-0">
          <Card.Header>
            <Card.Title>Contact card</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body className="text-center">
              <img
                className="avatar-xxl brround cover-image"
                src={U15}
                alt="user15"
              />
              <h4 className="mb-0 mt-3">Mike Rowe-Soft</h4>
              <Card.Text>Web designer</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Row className="user-social-detail">
                <div className="social-profile me-4 rounded text-center">
                  <Card.Link href="">
                    <i className="fa fa-google"></i>
                  </Card.Link>
                </div>
                <div className="social-profile me-4 rounded text-center">
                  <Card.Link href="">
                    <i className="fa fa-facebook"></i>
                  </Card.Link>
                </div>
                <div className="social-profile me-4 rounded text-center">
                  <Card.Link href="">
                    <i className="fa fa-twitter"></i>
                  </Card.Link>
                </div>
              </Row>
            </Card.Footer>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// CONTACT CARD 2

export const ContactCard2 = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card className="border p-0">
          <Card.Header>
            <Card.Title>Contact card</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body className="text-center">
              <img
                className="avatar-xxl brround cover-image"
                src={U16}
                alt="user15"
              />
              <h4 className="mb-0 mt-3">Laura Norda</h4>
              <Card.Text>Web designer</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Row className="user-social-detail">
                <div className="social-profile me-4 rounded text-center">
                  <Card.Link href="">
                    <i className="fa fa-google"></i>
                  </Card.Link>
                </div>
                <div className="social-profile me-4 rounded text-center">
                  <Card.Link href="">
                    <i className="fa fa-facebook"></i>
                  </Card.Link>
                </div>
                <div className="social-profile me-4 rounded text-center">
                  <Card.Link href="">
                    <i className="fa fa-twitter"></i>
                  </Card.Link>
                </div>
              </Row>
            </Card.Footer>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// CONTACT CARD 3

export const ContactCard3 = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card className="border p-0">
          <Card.Header>
            <Card.Title>Contact card</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body className="text-center">
              <img
                className="avatar-xxl brround cover-image"
                src={U17}
                alt="user15"
              />
              <h4 className="mb-0 mt-3">Willie Makit</h4>
              <Card.Text>Web designer</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Row className="user-social-detail">
                <div className="social-profile me-4 rounded text-center">
                  <Card.Link href="">
                    <i className="fa fa-google"></i>
                  </Card.Link>
                </div>
                <div className="social-profile me-4 rounded text-center">
                  <Card.Link href="">
                    <i className="fa fa-facebook"></i>
                  </Card.Link>
                </div>
                <div className="social-profile me-4 rounded text-center">
                  <Card.Link href="">
                    <i className="fa fa-twitter"></i>
                  </Card.Link>
                </div>
              </Row>
            </Card.Footer>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};
// CONTACT CARD 4

export const ContactCard4 = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card className="border p-0">
          <Card.Header>
            <Card.Title>Contact card</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body className="text-center">
              <img
                className="avatar-xxl brround cover-image"
                src={U19}
                alt="user15"
              />
              <h4 className="mb-0 mt-3">Don Messwidme</h4>
              <Card.Text>Web designer</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Row className="user-social-detail">
                <div className="social-profile me-4 rounded text-center">
                  <Card.Link href="">
                    <i className="fa fa-google"></i>
                  </Card.Link>
                </div>
                <div className="social-profile me-4 rounded text-center">
                  <Card.Link href="">
                    <i className="fa fa-facebook"></i>
                  </Card.Link>
                </div>
                <div className="social-profile me-4 rounded text-center">
                  <Card.Link href="">
                    <i className="fa fa-twitter"></i>
                  </Card.Link>
                </div>
              </Row>
            </Card.Footer>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// Basic card

export const BasicCard = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card>
          <Card.Header>
            <Card.Title>Basic card</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body>
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
              metus varius laoreet
            </Card.Body>
            <Card.Footer>This is Basic card footer</Card.Footer>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// Basic color card-header

export const BasicColorCardHeader = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card>
          <Card.Header className="bg-primary br-te-3 br-ts-3">
            <Card.Title className="text-white">
              Basic color card-header
            </Card.Title>
            <div className="card-options ">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i className="fe fe-chevron-up text-white"></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x text-white"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
            <Card.Footer>This is Basic card footer</Card.Footer>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// Basic color card-footer

export const BasicColorCardFooter = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card>
          <Card.Header>
            <Card.Title>Basic color card-footer</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
            <Card.Footer className="bg-danger br-be-3 br-bs-3">
              <div className="text-white">Basic card footer</div>
            </Card.Footer>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// Card with success alert

export const CardwithSuccessAlert = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card>
          <Card.Header>
            <Card.Title>Card with success alert</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Alert variant="success" className="mb-0">
              Adding action was successful
            </Alert>
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// Card with danger alert

export const CardwithDangerAlert = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card>
          <Card.Header>
            <Card.Title>Card with error alert</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Alert variant="danger" className="mb-0">
              Adding action failed
            </Alert>
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// Initial collapsed card

export const InitialCollapsedCard = () => {
  const [expanded, setExpanded] = useState(false);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card>
          <Card.Header>
            <Card.Title>Initial collapsed card</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// Card with switch

export const CardWithSwitch = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <Card>
      <Card.Header>
        <Card.Title>Card with switch</Card.Title>
        <div className="card-options">
          <Form.Check
            className="m-0"
            type="switch"
            id="custom-switch"
            onChange={(e) => {
              e.target.checked ? setExpanded(true) : setExpanded(false);
            }}
            checked={expanded}
          />
        </div>
      </Card.Header>
      <Collapse in={expanded} timeout="auto">
        <Card.Body>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Card.Body>
      </Collapse>
    </Card>
  );
};

// Card With List

export const CardwithList = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card className="m-b-20">
          <Card.Header>
            <Card.Title>Card With List</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body>
              <div className="visitor-list">
                <div className="media m-0 mt-0 border-bottom">
                  <img
                    className="brround avatar-md me-3"
                    alt="avatra-img"
                    src={U18}
                  />
                  <div className="media-body">
                    <Card.Link href="" className="text-default fw-semibold">
                      John Paige
                    </Card.Link>
                    <p className="text-muted">
                      Uploaded new invoices for RedBus
                    </p>
                  </div>
                </div>
                <div className="media mt-2 border-bottom">
                  <img
                    className="brround avatar-md me-3"
                    alt="avatra-img"
                    src={U20}
                  />
                  <div className="media-body">
                    <Card.Link href="" className="text-default fw-semibold">
                      Lillian Quinn
                    </Card.Link>
                    <p className="text-muted">
                      Created new work flow for the current
                    </p>
                  </div>
                </div>
                <div className="media mt-2">
                  <img
                    className="brround avatar-md me-3"
                    alt="avatra-img"
                    src={U18}
                  />
                  <div className="media-body">
                    <Card.Link href="" className="text-default fw-semibold">
                      Irene Harris
                    </Card.Link>
                    <p className="text-muted mb-0">
                      Submitted the project schedule to the manager
                    </p>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// Sample card

export const SampleCard = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card className="m-b-20">
          <Card.Header>
            <Card.Title>Sample card</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body>
              <Card.Text>
                Put toy mouse in food bowl run out of litter box at full speed
                drool but pee in Put toy mouse Put toy mouse the shoe purr when
                being pet but chew foot.
              </Card.Text>
              <Card.Text className="mb-0">
                Scratch the postman wake up lick paw Duis aute irure dolor in
                reprehenderit wake up owner meow meow lick plastic bags Scratch
                the postman wake up lick paw wake Duis aute irure dolor having
                their mate disturbing sleeping humans.
              </Card.Text>
            </Card.Body>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// card-with image
export const CardwithImage = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card className="card-blog-overlay  overflow-hidden">
          <Card.Header className="z-index2  border-transparent">
            <Card.Title className="text-white ">card-with image</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i className="fe fe-chevron-up text-white"></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x text-white"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body className="text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};
// Card blue

export const CardBlue = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card>
          <div className="card-status bg-blue br-te-7 br-ts-7"></div>
          <Card.Header>
            <Card.Title>Card blue</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// Card status on left side

export const CardLeftSide = () => {
  const [expanded, setExpanded] = useState(true);

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? (
        <Card>
          <div className="card-status card-status-left bg-red br-bs-7 br-ts-7"></div>
          <Card.Header>
            <Card.Title>Card status on left side</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => setShow(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};

// fullscreen button

export const FullScreenDialog = () => {
  const [expanded, setExpanded] = useState(true);
  let [fullScreen, setFullscreen] = useState("true");
  const [show, setShow] = useState(false);

  const fullscreenmodalClose = () => setShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const [shows, setShows] = useState(true);

  return (
    <div>
      {shows ? (
        <Card>
          <Card.Header>
            <Card.Title>Fullscreen button</Card.Title>
            <div className="card-options">
              <Link
                to="#"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <i
                  className={`fe ${
                    expanded ? "fe-chevron-up" : "fe-chevron-down"
                  }`}
                ></i>
              </Link>
              <Link to="#" onClick={() => handleShow(true)}>
                <i className="fe fe-maximize"></i>
              </Link>

              <Link to="#" onClick={() => setShows(false)} aria-label="close">
                <i className="fe fe-x"></i>
              </Link>
              <Modal
                show={show}
                fullscreen={fullScreen}
                onHide={() => setShow(false)}
              >
                <Modal.Header>
                  <Modal.Title>Modal</Modal.Title>
                  <span
                    className="d-flex ms-auto"
                    onClick={fullscreenmodalClose}
                  >
                    <i className="fe fe-x ms-auto"></i>
                  </span>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={fullscreenmodalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={fullscreenmodalClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Card.Header>
          <Collapse in={expanded} timeout="auto">
            <Card.Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum
            </Card.Body>
          </Collapse>
        </Card>
      ) : null}
    </div>
  );
};
