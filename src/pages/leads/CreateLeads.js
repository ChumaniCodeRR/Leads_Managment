import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faPhoneSquare ,faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore , faHome} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, FormGroup , Breadcrumb , Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createNewLead } from '../../actions/LeadsActions';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";



const CreateNewLeads = (props) => {

  const [inputs, setInputs] = useState({
    last_name:"",
    first_name:"",
    email:"",
    comment_:"",
    //lead_status:""
  })

  const { register , handleSubmit, formState: { errors } }  = useForm();

  const { last_name, first_name, email, comment_ } = inputs;

  const id = props.match.params.id;

  const [lead_status, setLeadStatus] = useState();

  //const [firstName, setFirstName] = useState("");
  const dispatch = useDispatch();

  const[currentStatus, setStatus] = useState();

  const changeStatus = (newstatus) => {
    setLeadStatus(newstatus);
  }

  function onChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function onSubmit() {
    dispatch(createNewLead(id,inputs))
    .then(() => {
       successMessage();
    })
    .catch((errors) => {
      console.log(errors)
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
      props.history.push(`/leads/Leads/${id}`);
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
            <NavLink as={Link} to={`/leads/Leads/${id}`}>
               Leads 
            </NavLink>           
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Create New Lead</Breadcrumb.Item>
          </Breadcrumb>
         </div>
        <Dropdown>
          <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
            <FontAwesomeIcon icon={faPhoneSquare} className="me-2" />
            <span>New Lead</span>
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
                <Form.Group className="mb-2">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required type="text" name="last_name" value={last_name} onChange={onChange} placeholder="Enter last name" />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control required type="text" name="first_name" value={first_name} onChange={onChange} placeholder="Enter first name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required type="email" name="email" value={email} onChange={onChange} placeholder="company@email.com..." />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group >
                  <Form.Label>Lead Comments</Form.Label>
                  <Form.Control as="textarea" rows="4" name="comment_" value={comment_} onChange={onChange} placeholder="Enter your comment..." />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Lead Status</Form.Label>
                <Form.Select id="status" 
                 name="lead_status"
                 onChange={(e) => changeStatus(e.target.value)}
                 //onChange={(event) => changeStatus(event.target.value)} 
                 value={lead_status}>
                  <option value="received">Received</option>
                  <option value="in progress">In-Progress</option>
                  <option value="sold">Sold</option>
                  <option value="unsuccessful">Unsuccessful</option>
                </Form.Select>
              </Form.Group>
             </Col>
            </Row>
            <div className="mt-3">
              <Button variant="primary" type="submit">Create Lead</Button>
             </div>
            </Form>
         </Card.Body>
        </Card>
          </Col>
        </Row>
        </>
    )
}

export default CreateNewLeads