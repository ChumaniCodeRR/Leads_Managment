import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faHome ,faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '@themesberg/react-bootstrap';
import { UpdateAdminForm }  from "../../components/Forms";
import { Col, Row, Card, Form, Button, InputGroup, Breadcrumb, FormGroup } from '@themesberg/react-bootstrap';
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {getAdminById,editAdmin} from "../../actions/AdminActions";

const UpdateAdmin = (props) => {

     const [inputs, setInputs] = useState({
      first_name:"",
      last_name:"",
      mobile:"",
      email:""
     });

     const id = props.match.params.id;
     const dispatch = useDispatch();

     useEffect(() => {
       dispatch(getAdminById(id)).then((data) => {
         setInputs({first_name: data.first_name, last_name: data.last_name, mobile: data.mobile, email: data.email});
       });
     }, []);

     function onChange(e){
       const {name, value } = e.target;
       setInputs((inputs) => ({ ...inputs, [name]: value }));
     }

     function onSubmit(e){
       e.preventDefault()
       dispatch(editAdmin(id,inputs))
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
            <Breadcrumb.Item active>Update Admin</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        </div>
         <Row>
            <Col xs={1} xl={10}>
            <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Header>
      <h5>Update administrator</h5>
      </Card.Header>
     <Card.Body>
       <Form onSubmit={onSubmit}>
         <Row>
           <Col md={6} className="mb-3">
             <Form.Group id="firstName">
                <Form.Label>First Name *</Form.Label>
                <Form.Control type="text" value={inputs.first_name} name="first_name" onChange={onChange} />
              </Form.Group>
           </Col>
           <Col md={6} className="mb-3">
           <Form.Group id="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={inputs.last_name} name="last_name" onChange={onChange} />
              </Form.Group>
           </Col>
         </Row>
         <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={inputs.email} name="email" onChange={onChange} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="mobilenumber">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" value={inputs.mobile} name="mobile" onChange={onChange}/>
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
}

export default UpdateAdmin 