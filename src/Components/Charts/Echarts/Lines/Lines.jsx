import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PageHeader from "../../../../commonComponents/PageHeader/PageHeader";
import { BasicChart, LargeScaleAreaChart, StackedAreaChart, StepLineChart } from "../../../../Data/DataChart/DataEchart";
import "./Lines.scss";

const Lines = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Lines Chart"
          active="Lines Chart"
          items={["Charts"]}
        />

        <Row>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Basic Line Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <BasicChart />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Step Line Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <StepLineChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Stacked Area Chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <StackedAreaChart />
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h3">Large scale area chart</Card.Title>
              </Card.Header>
              <Card.Body>
                <LargeScaleAreaChart />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Lines;
