import React from "react";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import {
  Button,
  Card,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Tabs,
  Tab,
} from "react-bootstrap";
import {
  BasicCard,
  BasicColorCardFooter,
  BasicColorCardHeader,
  CardBlue,
  CardLeftSide,
  CardWithSwitch,
  CardwithDangerAlert,
  CardwithImage,
  CardwithList,
  CardwithSuccessAlert,
  ContactCard1,
  ContactCard2,
  ContactCard3,
  ContactCard4,
  FullScreenDialog,
  InitialCollapsedCard,
  SampleCard,
} from "../../../Data/App/CardDesignData";
import "./CardsDesign.scss";
import File21 from "../../../assets/images/FileImages/File21.jpg";
import File22 from "../../../assets/images/FileImages/File22.jpg";
import File23 from "../../../assets/images/FileImages/File23.jpg";
import File24 from "../../../assets/images/FileImages/File24.jpg";
import File25 from "../../../assets/images/FileImages/File25.jpg";
import File26 from "../../../assets/images/FileImages/File29.jpg";
import File27 from "../../../assets/images/FileImages/File27.jpg";
import File28 from "../../../assets/images/FileImages/File28.jpg";


const CardsDesign = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader titles="Cards" active="Cards" items={["Apps"]} />

        {/* <--<-< ROW OPEN >->--> */}
        <Row>
          <Col md={6} xl={4}>
            <Card className="text-primary bg-primary-transparent card-transparent">
              <Card.Body>
                <Card.Title>Primary transparent card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={6} xl={4}>
            <Card className="text-secondary bg-secondary-transparent card-transparent">
              <Card.Body>
                <Card.Title>Secondary transparent card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={6} xl={4}>
            <Card className="text-success bg-success-transparent card-transparent">
              <Card.Body>
                <Card.Title>Success transparent card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={6} xl={4}>
            <Card className="text-danger bg-danger-transparent card-transparent">
              <Card.Body>
                <Card.Title>Danger transparent card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={6} xl={4}>
            <Card className="text-info bg-info-transparent card-transparent">
              <Card.Body>
                <Card.Title>Info transparent card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={6} xl={4}>
            <Card className="text-warning bg-warning-transparent card-transparent">
              <Card.Body>
                <Card.Title>Warning card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
        </Row>
        {/* <--<-< ROW CLOSED >->--> */}

        {/* <--<-< ROW OPEN >->--> */}
        <Row>
          <Col md={4} xl={4}>
            <Card className="text-white bg-primary">
              <Card.Body>
                <Card.Title>Primary card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={4} xl={4}>
            <Card className="text-white bg-secondary">
              <Card.Body>
                <Card.Title>Secondary card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={4} xl={4}>
            <Card className="text-white bg-success">
              <Card.Body>
                <Card.Title>Success card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={4} xl={4}>
            <Card className="text-white bg-danger">
              <Card.Body>
                <Card.Title>Danger card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={4} xl={4}>
            <Card className="text-white bg-info">
              <Card.Body>
                <Card.Title>Info card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col xl={4} md={4}>
            <Card className="text-white bg-warning">
              <Card.Body>
                <Card.Title>Warning card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={4} xl={4}>
            <BasicCard />
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={4} xl={4}>
            <BasicColorCardHeader />
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={4} xl={4}>
            <BasicColorCardFooter />
          </Col>
          {/* <*--< COL END >--*> */}
          {/* <*--< COL END >--*> */}
          <Col md={4} xl={4}>
            <FullScreenDialog />
          </Col>
          {/* <*--< COL END >--*> */}
          <Col xl={4} md={4}>
            <CardWithSwitch />
          </Col>
          {/* <*--< COL END >--*> */}
          <Col xl={4} md={4}>
            <InitialCollapsedCard />
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={6} xl={6}>
            <CardwithDangerAlert />
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={6} xl={6}>
            <CardwithSuccessAlert />
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={6} xl={6}>
            <Card>
              <Card.Header>
                <Card.Title>Card with custom buttons</Card.Title>
                <div className="card-options">
                  <Card.Link href="#" className="btn btn-primary btn-sm">
                    Action 1
                  </Card.Link>
                  <Card.Link href="#" className="btn btn-secondary btn-sm ms-2">
                    Action 2
                  </Card.Link>
                </div>
              </Card.Header>
              <Card.Body>
                No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure, but because those who do not know how to pursue
                pleasure rationally encounter consequences that are extremely
                painful actual teachings of the great explorer
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={6} xl={6}>
            <Card>
              <Card.Header>
                <Card.Title>Card with search form</Card.Title>
                <div className="card-options">
                  <Form>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Search something..."
                        name="s"
                      />
                      <span className="input-group-btn ms-0">
                        <Button
                          className="btn btn-sm btn-primary"
                          type="submit"
                        >
                          <span className="fe fe-search text-white"></span>
                        </Button>
                      </span>
                    </div>
                  </Form>
                </div>
              </Card.Header>
              <Card.Body>
                No one rejects, dislikes, or avoids pleasure itself, because it
                is pleasure, but because those who do not know how to pursue
                pleasure rationally encounter consequences that are extremely
                painful actual teachings of the great explorer
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
        </Row>
        {/* <--<-< ROW CLOSED >->--> */}

        {/* <--<-< ROW OPEN >->--> */}
        <Row>
          <Col md={6} xl={4}>
            <Card>
              <Card.Header>
                <Card.Title>Card-Header</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  Card subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">Go somewhere</Button>
              </Card.Footer>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <Card.Title className="pb-2">Card title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card link</Card.Link>
                <Card.Link href="#">Another link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={6} xl={4}>
            <Card>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card className="text-end">
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <--<-< ROW CLOSED >->--> */}

        {/* <--<-< ROW OPEN >->--> */}
        <Row className="row-cols-4">
          <Col xl={3} sm={6} md={6}>
            <ContactCard1 />
          </Col>
          {/* <*--< COL END >--*> */}
          <Col xl={3} sm={6} md={6}>
            <ContactCard2 />
          </Col>
          {/* <*--< COL END >--*> */}
          <Col xl={3} sm={6} md={6}>
            <ContactCard3 />
          </Col>
          <Col xl={3} sm={6} md={6}>
            <ContactCard4 />
          </Col>
          {/* <*--< COL END >--*> */}
        </Row>
        {/* <--<-< ROW CLOSED >->--> */}

        {/* <--<-< ROW OPEN >->--> */}
        <Row>
          <Col xl={4} md={12}>
            <Card className="overflow-hidden">
              <img src={File21} className="card-img-top" alt="img" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4} md={12}>
            <Card className="overflow-hidden">
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
              </Card.Body>
              <img src={File22} className="card-img-bottom" alt="img" />
            </Card>
          </Col>
          <Col xl={4} md={12}>
            <Card>
              <img src={File23} className="card-img-top" alt="img" />
              <Card.Body className="border-bottom">
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>An item</ListGroupItem>
                <ListGroupItem>A second item</ListGroupItem>
                <ListGroupItem>A third item</ListGroupItem>
              </ListGroup>
              <Card.Body className="border-top">
                <Card.Link href="#">Card link</Card.Link>
                <Card.Link href="#">Another link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <--<-< ROW CLOSED >->--> */}

        {/* <--<-< ROW OPEN >->--> */}
        <Row>
          <Col xl={4} md={12}>
            <Card>
              <Card.Body className="text-start">
                <blockquote className="quote">
                  <Card.Text>
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <small className="text-muted">
                    so awesome this title
                    <cite title="Source Title">-magna aliqua</cite>
                  </small>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={12} xl={4}>
            <Card>
              <Card.Body className="text-center">
                <blockquote className="quote">
                  <Card.Text>
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <small className="text-muted">
                    so awesome this title
                    <cite title="Source Title">-magna aliqua</cite>
                  </small>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={12} xl={4}>
            <Card>
              <Card.Body className="text-end">
                <blockquote className="quote">
                  <Card.Text>
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Card.Text>
                  <small className="text-muted">
                    so awesome this title
                    <cite title="Source Title">-magna aliqua</cite>
                  </small>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={12} xl={4}>
            <CardwithList />
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={12} xl={4}>
            <SampleCard />
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={12} xl={4}>
            <Card className="d-flex m-b-20">
              <Card.Header>
                <Card.Title>Card with Toolbar</Card.Title>
                <div className="card-options">
                  <Card.Link className="text-gray" href="#">
                    <i className="mdi mdi-refresh"></i>
                  </Card.Link>
                  <Card.Link className="text-gray" href="#">
                    <i className="mdi mdi-bookmark-outline"></i>
                  </Card.Link>
                  <Card.Link className="text-gray" href="#">
                    <i className="mdi mdi-dots-vertical"></i>
                  </Card.Link>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Put toy mouse in food bowl run out of litter box at full speed
                  drool but pee in Put toy mouse Put toy mouse the shoe purr
                  when being pet but chew foot.
                </Card.Text>
                <Card.Text className="mb-0">
                  Duis aute irure dolor in reprehenderit in voluptate velit
                  Scratch the postman wake up lick paw wake up owner meow meow
                  lick plastic bags Scratch the postman wake up lick paw wake
                  having their mate disturbing sleeping humans.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
        </Row>
        {/* <--<-< ROW CLOSED >->--> */}

        {/* <--<-< ROW OPEN >->--> */}
        <Row>
          <Col md={12} xl={4}>
            <Card className="card-blog-overlay1 overflow-hidden">
              <Card.Body className="text-white">
                <Card.Title className="text-white">card-with image</Card.Title>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </Card.Body>
              <Card.Footer className="text-white z-index2 border-transparent">
                This is Basic card footer
              </Card.Footer>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={12} xl={4}>
            <Card className="card-blog-overlay2  overflow-hidden">
              <Card.Body className="text-white">
                <Card.Title className="text-white">card-with image</Card.Title>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </Card.Body>
              <Card.Footer className="text-white z-index2 border-transparent">
                This is Basic card footer
              </Card.Footer>
            </Card>
          </Col>
          {/* <*--< COL END >--*> */}
          <Col md={12} xl={4}>
            <CardwithImage />
          </Col>
          {/* <*--< COL END >--*> */}
        </Row>
        {/* <--<-< ROW CLOSED >->--> */}

        {/* <--<-< ROW OPEN >->--> */}
        <Row>
          <Col md={12} xl={6}>
            <Card>
              <Row className="g-0">
                <Col md={4}>
                  <img
                    src={File24}
                    className="card-img-left h-100"
                    alt="img"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={12} xl={6}>
            <Card>
              <Row className="g-0">
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col md={4}>
                  <img
                    src={File25}
                    className="card-img-right h-100"
                    alt="img"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        {/* <--<-< ROW CLOSED >->--> */}

        {/* <--<-< ROW OPEN >->--> */}
        <Row>
          <Col xl={12} md={12}>
            <div className="mb-5 card-group overflow-hidden">
              <Card className="shadow-none">
                <img
                  src={File26}
                  className="card-img-top"
                  alt="img"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="shadow-none border-style">
                <img
                  src={File28}
                  className="card-img-top"
                  alt="img"
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="shadow-none">
                <img
                  src={File27}
                  className="card-img-top"
                  alt="img"
                />
                <div className="card-body">
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </div>
              </Card>
            </div>
          </Col>
          <Col md={12} xl={6}>
            <CardBlue />
          </Col>
          <Col md={12} xl={6}>
            <CardLeftSide />
          </Col>
          <Col xl={6} md={12}>
            <Card>
              <Card.Body>
                <div className="panel panel-primary">
                  <Tabs defaultActiveKey="active">
                    <Tab eventKey="active" title="Active" className="mb-3">
                      <h5 className="mt-3">
                        <b>Special title treatment 01</b>
                      </h5>
                      <p className="mt-3">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <Button variant="primary">Go somewhere</Button>
                    </Tab>
                    <Tab eventKey="link" title="Link" className="mb-3">
                      <h5 className="mt-3">
                        <b>Special title treatment 02</b>
                      </h5>
                      <p className="mt-3">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <Button variant="primary">Go somewhere</Button>
                    </Tab>
                    <Tab eventKey="disable" title="disabled"></Tab>
                  </Tabs>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={6} md={12}>
            <Card>
              <Card.Body className="panel">
                <Tabs defaultActiveKey="active">
                  <Tab eventKey="active" title="Active" className="mb-3">
                    <h5 className="mt-5">
                      <b>Special title treatment 01</b>
                    </h5>
                    <p className="mt-5">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <Button variant="primary">Go somewhere</Button>
                  </Tab>
                  <Tab eventKey="link" title="Link" className="mb-3">
                    <h5 className="mt-5">
                      <b>Special title treatment 02</b>
                    </h5>
                    <p className="mt-5">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <Button variant="primary">Go somewhere</Button>
                  </Tab>
                  <Tab eventKey="disable" title="disabled" disabled></Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <--<-< ROW CLOSED >->--> */}
      </div>
    </React.Fragment>
  );
};

export default CardsDesign;
