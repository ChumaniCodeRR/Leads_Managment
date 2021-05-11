import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faPhoneSquare ,faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore , faHome} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, FormGroup , Breadcrumb , Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';

const CreateClientUsers = () => {

    return (
        <>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
             <div className="d-block mb-4 mb-md-0">
              <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
              <Breadcrumb.Item>Vetro Lead</Breadcrumb.Item>
              <Breadcrumb.Item >
               <NavLink as={Link} to={Routes.ClientUsers.path}>
                 Client Users
               </NavLink>           
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Create New Client User</Breadcrumb.Item>
             </Breadcrumb>
           </div>
           <Dropdown>
             <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
              <FontAwesomeIcon icon={faPhoneSquare} className="me-2" />
              <span>New Client User</span>
             </Dropdown.Toggle>
            </Dropdown>
          </div>

          <Row>
        <Col xs={12} xl={8}>
           <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
            <h5 className="mb-4">General information</h5>
            <Form>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="clientinfo">
                <Form.Label>Client Info(*)</Form.Label>
                <Form.Control required type="text" placeholder="Enter your first name" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="name">
                <Form.Label>Name (*)</Form.Label>
                <Form.Control required type="text" placeholder="Enter your first name" />
              </Form.Group>
            </Col>          
            </Row>
            <Row>
             <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Email (*)</Form.Label>
                <Form.Control required type="email" placeholder="name@company.com" />
              </Form.Group>
             </Col>
             <Col md={6} className="mb-3">
                <Form.Group id="contact">
                <Form.Label>Contact (*)</Form.Label>
                <Form.Control required type="number" placeholder="+ 27 11 939 4334" />
                </Form.Group>
             </Col>
            </Row>
            <Row className="align-items-center">
              <Col sm={9} className="mb-3">
                <Form.Group id="address">
                <Form.Label>Address (*)</Form.Label>
                <Form.Control required type="text" placeholder="Address" />
                </Form.Group>
               </Col>
            </Row>
    
            
            <div className="mt-3">
              <Button variant="primary" type="submit">Create</Button>
             </div>

            </Form>
         </Card.Body>
        </Card>
          </Col>
        </Row>

        </>
    )

}

export default CreateClientUsers