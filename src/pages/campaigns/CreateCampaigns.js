import React , { useState } from "react";
import Datetime from "react-datetime";
import moment from "moment-timezone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faPhoneSquare ,faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore , faHome} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, FormGroup , Breadcrumb , Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


const CreateNewCampaign = (props) => {
   
    //const [birthday, setBirthday] = useState("");
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
            <Breadcrumb.Item active>Create New Campagin</Breadcrumb.Item>
          </Breadcrumb>
         </div>
         <Dropdown>
          <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
            <FontAwesomeIcon icon={faPhoneSquare} className="me-2" />
            <span>New Campagin</span>
          </Dropdown.Toggle>
        </Dropdown>
        </div>

       
        <Row>
        <Col xs={12} xl={8}>
           <Card border="light" className="bg-white shadow-sm mb-4">
            <Card.Body>
            <h5 className="mb-4">General information</h5>
            <Form>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="name">
                <Form.Label>Name (*)</Form.Label>
                <Form.Control required type="text" placeholder="Enter your first name" />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="description">
                <Form.Label>Description (*)</Form.Label>
                <Form.Control required type="email" placeholder="name@company.com" />
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
              <Col sm={4} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Select Client</Form.Label>
                  <Form.Select id="client" defaultValue="0">
                   <option value="0">Client</option>
                   <option value="MTN">MTN</option>
                   <option value="Vodacom">Vodacom</option>
                   <option value="Telkom">Telkom</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={4} className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Group as={Row}>
    
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

export default CreateNewCampaign