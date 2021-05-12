import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faPhoneSquare ,faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore , faHome} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, FormGroup , Breadcrumb , Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';
import { createNewClient } from '../../actions/ClientActions';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const CreateNewClient = (props) => {

     const [inputs, setInputs] = useState({
      name:"",
      email:"",
      contact:"",
      address:""
    })

    const { register , handleSubmit, formState: { errors } }  = useForm();
    const { name, email , contact , address } = inputs;
    const dispatch = useDispatch();

    function onChange(e) {
      const { name, value } = e.target;
      setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    function onSubmit() {
      dispatch(createNewClient(inputs))
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
        title: "Successfully Saved",
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
            <Breadcrumb.Item active>Create New Client</Breadcrumb.Item>
          </Breadcrumb>
         </div>
        <Dropdown>
          <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
            <FontAwesomeIcon icon={faPhoneSquare} className="me-2" />
            <span>New Client</span>
          </Dropdown.Toggle>
        </Dropdown>
        </div>

        <Row>
        <Col xs={12} xl={8}>
           <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
            <h5 className="mb-4">General information</h5>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="name">
                <Form.Label>Name (*)</Form.Label>
                <Form.Control required type="text" placeholder="Enter your name" value={name} onChange={onChange} name="name"/>
              </Form.Group>
              {errors.name && (
                <div className="text-danger">This field is required</div>
              )}
            </Col>
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Email (*)</Form.Label>
                <Form.Control required type="email" placeholder="name@company.com" value={email} onChange={onChange} name="email"/>
              </Form.Group>
              {errors.email && (
                <div className="text-danger">This field is required</div>
              )}
            </Col>
            </Row>
            <Row>
                <Col md={6} className="mb-3">
                <Form.Group id="contact">
                <Form.Label>Contact (*)</Form.Label>
                <Form.Control required type="number" placeholder="+ 27 11 939 4334" value={contact} onChange={onChange} name="contact" />
                </Form.Group>
                {errors.contact && (
                <div className="text-danger">This field is required</div>
              )}
               </Col>
            </Row>
            <Row  className="align-items-center">
              <Col md={6} className="mb-3">
                <Form.Group id="mobilenumber">
                <Form.Label>Address (*)</Form.Label>
                 <textarea className="form-control" rows="5" required placeholder="Address"  value={address} onChange={onChange} name="address" />
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
    );

}

export default CreateNewClient 