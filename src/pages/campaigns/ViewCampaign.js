import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faHome ,faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '@themesberg/react-bootstrap';
import { Col, Row, Card, Form, Button, InputGroup, Breadcrumb , FormGroup } from '@themesberg/react-bootstrap';
import image from '../../assets/img/marker.svg';
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';

export const ViewCampaign = () => {

    return (
      <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
         <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
          <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Vetro Lead</Breadcrumb.Item>
            <Breadcrumb.Item >
            <NavLink as={Link} to={Routes.Campaigns.path}>
               Campagins
            </NavLink>           
            </Breadcrumb.Item>
            <Breadcrumb.Item active>View Campagin</Breadcrumb.Item>
          </Breadcrumb>
         </div>      
        </div>
   
        <Row>
      <Col xs={12} xl={8}>
      <Card style={{ width: '60rem' }}>
      <Card.Header>
        <h5>Campagin Details</h5>
      </Card.Header>
      <Card.Body>
       <Card.Title></Card.Title>
       <Form>
         <Row>
           <Col lg="4" md="6" className="mb-lg-0 mb-4">
            <Card.Img src={image} alt={`Your alt text`}/>
          </Col>
          <Col md={6} className="mb-3">
          <Card.Text>             
             <Form.Group id="name">
                <Form.Label>Name</Form.Label>               
             </Form.Group>
           </Card.Text>
          <Card.Text>    
           <Form.Group id="description">
                <Form.Label>Description</Form.Label>           
            </Form.Group>
           </Card.Text>
           <Card.Text> 
              <Form.Group id="startdate">
                <Form.Label>Start Date</Form.Label>        
              </Form.Group>
           </Card.Text>
           <Card.Text> 
              <Form.Group id="enddate">
                <Form.Label>End Date</Form.Label>        
              </Form.Group>
            </Card.Text>
            <Card.Text> 
              <Form.Group id="client">
                <Form.Label>Client</Form.Label>        
              </Form.Group>
            </Card.Text>
            <Card.Text> 
              <Form.Group id="status">
                <Form.Label>Status</Form.Label>        
              </Form.Group>
            </Card.Text>
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
export default ViewCampaign