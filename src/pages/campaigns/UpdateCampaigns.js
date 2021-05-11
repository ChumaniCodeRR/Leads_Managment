import React , { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Datetime from "react-datetime";
import moment from "moment-timezone";
import { faBoxOpen, faCartArrowDown, faChartPie, faHome ,faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from '@themesberg/react-bootstrap';
import { UpdateAdminForm }  from "../../components/Forms";
import { Col, Row, Card, Form, Button, InputGroup, Breadcrumb, FormGroup } from '@themesberg/react-bootstrap';
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


export const UpdateCampaigns = () => {

    const [startdate, setStartDate] = useState("");
    const [enddate, setEndDate] = useState("");

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
            <Breadcrumb.Item active>Update Campagin</Breadcrumb.Item>
          </Breadcrumb>
         </div>
        </div>

        <Row>
            <Col xs={1} xl={10}>
            <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Header>
      <h5>Update Campagin</h5>
      </Card.Header>
     <Card.Body>
       <Form>
         <Row>
           <Col md={6} className="mb-3">
             <Form.Group id="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your name" />
              </Form.Group>
           </Col>
           <Col md={6} className="mb-3">
           <Form.Group id="description">
                <Form.Label>Description</Form.Label>
                <Form.Control required type="text" placeholder="Enter your description" />
              </Form.Group>
           </Col>
         </Row>
         <Row>
         <Col md={6} className="mb-3">
            <Form.Group id="startdate">
                <Form.Label>Start-Date(*)</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setStartDate}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={startdate ? moment(startdate).format("MM/DD/YYYY") : ""}
                        placeholder="mm/dd/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
             </Col>
             <Col md={6} className="mb-3">
              <Form.Group id="enddate">
                <Form.Label>End-Date(*)</Form.Label>
                <Datetime
                  timeFormat={false}
                  onChange={setEndDate}
                  renderInput={(props, openCalendar) => (
                    <InputGroup>
                      <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                      <Form.Control
                        required
                        type="text"
                        value={enddate ? moment(enddate).format("MM/DD/YYYY") : ""}
                        placeholder="mm/dd/yyyy"
                        onFocus={openCalendar}
                        onChange={() => { }} />
                    </InputGroup>
                  )} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="client">
                <Form.Label>Client</Form.Label>
                <Form.Control required type="text" placeholder="client" />
              </Form.Group>
            </Col>     
          </Row>
          <Row>
          <Col sm={10}>
        <Form.Check
          type="radio"
          label="Active"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="In-progress"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Not-active"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
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
export default UpdateCampaigns