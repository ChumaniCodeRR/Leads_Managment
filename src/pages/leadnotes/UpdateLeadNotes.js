import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Datetime from "react-datetime";
import moment from "moment-timezone";
import { faBoxOpen, faCartArrowDown, faChartPie, faHome ,faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '@themesberg/react-bootstrap';
import { Col, Row, Card, Form, Button, InputGroup, Breadcrumb, FormGroup } from '@themesberg/react-bootstrap';
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { editLeadNotes } from '../../actions/LeadsNotesActions';
import Swal from "sweetalert2";

const UpdateLeadsNotes  = (props) => {
  
    const [inputs, setInputs] = useState({
        notes:"",
       });

    const id = props.match.params.id;
    const dispatch = useDispatch();

    function onChange(e){
        const {name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));  
    }

    function onSubmit(e){
        e.preventDefault()
        dispatch(editLeadNotes(id,inputs))
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
            <NavLink as={Link} to={Routes.Admin.path}>
               Notes
            </NavLink>           
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Update Notes</Breadcrumb.Item>
          </Breadcrumb>
         </div>
        </div>
        
        <Row>
            <Col xs={1} xl={10}>
            <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Header>
      <h5>Update Notes</h5>
      </Card.Header>
     <Card.Body>
       <Form onSubmit={onSubmit}>
         <Row>
           <Col md={10} className="mb-5">
             <Form.Group id="notes">
                <Form.Label>Notes</Form.Label>
                <Form.Control type="text" value={inputs.notes} name="notes" onChange={onChange} />
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
    )
}
export  default UpdateLeadsNotes