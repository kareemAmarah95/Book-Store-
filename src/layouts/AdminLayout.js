import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <div className="text-center bg-primary p-3">
        <h1 className="text-light">Admin Area</h1>
      </div>
      <Container>
        <Row>
          {/* <Col lg="3" className="bg-info vh-100" style={{}}>
          <h2 className="text-center">Side Bar</h2>
          <ul>
            <li>Books List</li>
          </ul>
        </Col>
        <Col lg="9">Content</Col> */}

          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}
