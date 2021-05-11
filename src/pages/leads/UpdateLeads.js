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
            <NavLink as={Link} to={Routes.Leads.path}>
               Leads
            </NavLink>           
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Update Leads</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        </div>

        <Row>
         <Col xs={1} xl={10}>
            <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Header>
        <h5>Update lead</h5>
        </Card.Header>
        <Card.Body>
        <Form>
          <Row>
            <Col md={6} className="mb-3">
               <Form.Group id="campaign">
                  <Form.Label>Campaign</Form.Label>
                  <Form.Control required type="text" placeholder="Enter client name" />
                </Form.Group>
             </Col>
             <Col md={6} className="mb-3">
             <Form.Group id="client">
                  <Form.Label>Client</Form.Label>
                  <Form.Control required type="text" placeholder="Enter client email" />
                </Form.Group>
             </Col>
          </Row>
          <Row>
               <Col md={6} className="mb-3">
                <Form.Group id="status">
                  <Form.Label>Status</Form.Label>
                  <Col sm={10}>
        <Form.Check
          type="radio"
          label="On"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Off"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        
             </Col>
                </Form.Group>
             </Col>
          </Row>
          <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="comments">
                <Form.Label>Lead Comments</Form.Label>
                <Form.Control as="textarea" rows="4" placeholder="Enter your comment..."/>
                </Form.Group>
              </Col>
          </Row>
        </Form>
        </Card.Body>
      </Card>
           </Col>
        </Row>
        </>
    )
}