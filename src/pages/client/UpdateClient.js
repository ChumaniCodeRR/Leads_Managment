import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faHome , faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '@themesberg/react-bootstrap';
import { Col, Row, Card, Form, Button, InputGroup, Breadcrumb , FormGroup } from '@themesberg/react-bootstrap';
import { UpdateClientForm }  from "../../components/Forms";
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {getClientById,editClients} from '../../actions/ClientActions';
import Swal from "sweetalert2";


export default (props) => {

  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    contact:"",
    address:""
   });

   const id = props.match.params.id;
   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(getClientById(id)).then((data) => {
      setInputs({name: data.name, email: data.email, contact: data.contact, address: data.address});
    });
  }, []);

  function onChange(e){
    const {name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function onSubmit(e){
    e.preventDefault()
    dispatch(editClients(id,inputs))
    .then(() => {
      successMessage();
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function successMessage() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully Updated",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      props.history.push("/client/Clients");
    });
   }

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
        <Form onSubmit={onSubmit}> 
          <Row>
            <Col md={6} className="mb-3">
               <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" value={inputs.name} name="name" onChange={onChange} />
                </Form.Group>
             </Col>
             <Col md={6} className="mb-3">
             <Form.Group id="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="text" value={inputs.email} name="email" onChange={onChange} />
                </Form.Group>
             </Col>
          </Row>
          <Row>
               <Col md={6} className="mb-3">
                <Form.Group id="contact">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control type="text" value={inputs.contact} name="contact" onChange={onChange} />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" value={inputs.address} name="address" onChange={onChange} />
                </Form.Group>
              </Col>
          </Row>
          <div className="mt-3">
            <Button variant="primary" type="submit">Save Changes</Button>
          </div>
        </Form>
        </Card.Body>
      </Card>
           </Col>
        </Row>
        </>
    );
};



  