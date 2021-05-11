import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faPhoneSquare ,faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore , faHome} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, FormGroup , Breadcrumb , Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createNewAdmin } from '../../actions/AdminActions';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateNewAdmin = (props) => {
 
  /*"first_name": "string",
  "last_name": "string",
  "mobile": "string",
  "email": "string"*/

    const [inputs, setInputs] = useState({
      first_name:"",
      last_name:"",
      mobile:"",
      email:""
    })

    const { register , handleSubmit, formState: { errors } }  = useForm();
    const { first_name, last_name, mobile, email } = inputs;
    const dispatch = useDispatch();

    function onChange(e) {
      const { name, value } = e.target;
      setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    function onSubmit() {
      dispatch(createNewAdmin(inputs))
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
        props.history.push("/admin/Administration");
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
            <NavLink as={Link} to={Routes.Admin.path}>
               Administration
            </NavLink>           
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Create New Admin</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Dropdown>
          <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
            <FontAwesomeIcon icon={faPhoneSquare} className="me-2" />
            <span>New Admin</span>
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
              <Form.Group id="firstName">
                <Form.Label>First Name (*)</Form.Label>
                <Form.Control required type="text" name="first_name" value={first_name} onChange={onChange} placeholder="Enter your first name" />
              </Form.Group>
               {errors.first_name && (
                <div className="text-danger">This field is required</div>
              )}
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Last Name (*)</Form.Label>
                <Form.Control required type="text" name="last_name" value={last_name} onChange={onChange} placeholder="Also your last name" />
              </Form.Group>
              {errors.last_name && (
                <div className="text-danger">This field is required</div>
              )}
            </Col>
            </Row>
            <Row>
                <Col md={6} className="mb-3">
                <Form.Group id="email">
                <Form.Label>Email (*)</Form.Label>
                <Form.Control required type="email" name="email" value={email} onChange={onChange} placeholder="name@company.com" />
                </Form.Group>
                {errors.email && (
                 <div className="text-danger">This field is required</div>
                 )}
               </Col>
               <Col md={6} className="mb-3">
                <Form.Group id="mobilenumber">
                <Form.Label>Mobile Number (*)</Form.Label>
                <Form.Control required type="number" name="mobile" value={mobile} onChange={onChange} placeholder="+ 27 11 939 4334" />
                </Form.Group>
                {errors.mobile && (
                 <div className="text-danger">This field is required</div>
                 )}
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

export default CreateNewAdmin