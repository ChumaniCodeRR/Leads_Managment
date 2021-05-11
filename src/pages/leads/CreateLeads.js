import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faPhoneSquare ,faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore , faHome} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, FormGroup , Breadcrumb , Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';

const CreateLeads = () => {
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
            <Form>
            <Row>
            <Col sm={4} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Campaign</Form.Label>
                  <Form.Select id="campaign" defaultValue="0">
                   <option value="0"></option>
                   <option value="MTN">#MyNeoShoot Campaign</option>
                   <option value="Vodacom">#RedCupContest</option>
                   <option value="Telkom">#LibertyExpressGiveaway</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col sm={4} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Client</Form.Label>
                  <Form.Select id="client" defaultValue="0">
                   <option value="0"></option>
                   <option value="MTN">MTN</option>
                   <option value="Vodacom">Vodacom</option>
                   <option value="Telkom">Telkom</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Lead Status</Form.Label>
                <Col sm={10}>
        <Form.Check
          type="radio"
          label="On"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Off"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        
             </Col>
              </Form.Group>
            </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
              <Form.Group id="description">
                <Form.Label>Lead Comments</Form.Label>
                <Form.Control as="textarea" rows="4" placeholder="Enter your comment..."/>
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
    )
}

export default CreateLeads