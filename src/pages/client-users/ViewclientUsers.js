import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie,faHome, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Dropdown } from '@themesberg/react-bootstrap';
import { Card, Form, Button, Breadcrumb , InputGroup, FormGroup } from '@themesberg/react-bootstrap';
import image from '../../assets/img/marker.svg';
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';
import { getAllClientUsers, deleteClientUsers } from "../../actions/clientUsersActions";
import { useDispatch, useSelector } from "react-redux";
import clientUsers, { ClientUsers } from '../../data/clientUsers';


export default (props) => {

  const [inputs, setInputs] = useState({
    user_id:"",
    first_name:"",
    last_name:"",
    mobile:"",
    email:"",
    is_active:"",
    client:""
   });

  const id = props.match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClientUsers(id)).then((data) => {
      setInputs({
        user_id: data.user_id,
        first_name: data.first_name, 
        last_name:data.last_name, 
        mobile:data.mobile,
        email:data.email,
        is_active:data.is_active,
        client:data.client});
    });
  }, []);


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
            <Breadcrumb.Item active>View Client Users</Breadcrumb.Item>
            </Breadcrumb>
           </div>   
        </div>

        <Row>
          <Col xs={12} xl={8}>
              <Card style={{ width: '60rem' }}>
          <Card.Header>
          <h5>Client User Details</h5>
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
                <Form.Label>Client Info</Form.Label>               
             </Form.Group>
           </Card.Text>
          <Card.Text>             
             <Form.Group id="name">
                <Form.Label>Name : {inputs.user_id}</Form.Label>               
             </Form.Group>
           </Card.Text>
          <Card.Text>    
           <Form.Group id="email">
                <Form.Label>Email</Form.Label>           
            </Form.Group>
           </Card.Text>
           <Card.Text> 
              <Form.Group id="contact">
                <Form.Label>Contact</Form.Label>        
              </Form.Group>
          </Card.Text>
          <Card.Text>
            <Form.Group id="address">
              <Form.Label>Address</Form.Label>
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
    );
};