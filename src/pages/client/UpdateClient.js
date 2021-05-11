import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faHome , faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '@themesberg/react-bootstrap';
import { Col, Row, Card, Form, Button, InputGroup, Breadcrumb , FormGroup } from '@themesberg/react-bootstrap';
import { UpdateClientForm }  from "../../components/Forms";
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';

export default () => {
    return (
        <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
          <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Vetro Lead</Breadcrumb.Item>
            <Breadcrumb.Item >
            <NavLink as={Link} to={Routes.Client.path}>
               Clients
            </NavLink>           
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Update Client</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        </div>
         <Row>
         <Col xs={1} xl={10}>
            <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Header>
        <h5>Update client</h5>
        </Card.Header>
        <Card.Body>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
               <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control required type="text" placeholder="Enter client name" />
                </Form.Group>
             </Col>
             <Col md={6} className="mb-3">
             <Form.Group id="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control required type="text" placeholder="Enter client email" />
                </Form.Group>
             </Col>
          </Row>
          <Row>
               <Col md={6} className="mb-3">
                <Form.Group id="contact">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control required type="number" placeholder="+12-345 678 910" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control required type="text" placeholder="Enter client Address.." />
                </Form.Group>
              </Col>
          </Row>
        </Form>
        </Card.Body>
      </Card>
           </Col>
        </Row>
        </>
    );
};



  