import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faHome , faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '@themesberg/react-bootstrap';
import { Col, Row, Card, Form, Button, InputGroup, Breadcrumb , FormGroup } from '@themesberg/react-bootstrap';
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { editLead , getLeadsStatus, getAllLeads } from '../../actions/LeadsActions';
import Swal from "sweetalert2";

const UpdateLeads = (props) => {

  const [inputs, setInputs] = useState({
    lead_status_id:"",
    notes:"",
   });

   const [lead_status_id, setLeadStatus] = useState();

   const id = props.match.params.id;
   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(getAllLeads(id)).then((data) => {
      setInputs({ notes: data.notes });
    });
  }, []);

  function onChange(e){
    const {name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function onSubmit(e){
    e.preventDefault()
    dispatch(editLead(id,inputs))
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
      props.history.push("/leads/Leads");
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
        <Form onSubmit={onSubmit}>
          <Row>
               <Col md={6} className="mb-3">
                <Form.Group id="status">
                  <Form.Label>Status</Form.Label>
                 <Form.Select id="status" 
                 name="lead_status"
                 //</Form.Group>onChange={(e) => changeStatus(e.target.value)}
                 //onChange={(event) => changeStatus(event.target.value)} 
                 >
                  <option value="received">Received</option>
                  <option value="in progress">In-Progress</option>
                  <option value="sold">Sold</option>
                  <option value="unsuccessful">Unsuccessful</option>
                </Form.Select>
             </Form.Group>
          </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="comments">
              <Form.Label>Lead Notes</Form.Label>
              <Form.Control as="textarea" rows="4" placeholder="Enter your comment..."/>
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

export default UpdateLeads 