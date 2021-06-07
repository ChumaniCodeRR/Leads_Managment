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
import {getCampaignById,editCampagins} from '../../actions/CampaignActions';
import { getAllClients } from '../../actions/ClientActions';
import Swal from "sweetalert2";

export default (props) => {

    //continue

    const [startdate , setStartDate] = useState("");
    const [enddate, setEndDate] = useState("");

    const [inputs, setInputs] = useState({
      name:"",
      description:"",
      start_date: "",
      end_date:"",
      client_list_id :"",
      status:"",
      lead_url:""
     });

    const clientlist = useSelector((state) => state.clients);

    const [clients, setClients] = useState([]);

    const [isloading, setisloading] = useState(false);
  
    const [selectedValue, setSelectedValue] = useState(0);

    const id = props.match.params.id;
    const dispatch = useDispatch();

    

    const handleChange = e => {
      setSelectedValue(e.value);
     /// const index = e.target.selectedIndex;
     // const el = e.target.childNodes[index]
      //const option =  el.getAttribute('id');  
    }

    useEffect(() => {
      setisloading(true);
      dispatch(getAllClients()).then(() => {
        setisloading(false);
      });
      setClients(clientlist.clients);
    }, [clients]);

    useEffect(() => {

      setStartDate(inputs.start_date);
      setEndDate(inputs.end_date);
      setSelectedValue(inputs.client_list_id);

      dispatch(getCampaignById(id)).then((data) => {
        setInputs(
          {name: data.name, 
          description: data.description, 
          start_date: data.start_date, 
          end_date: data.end_date, 
          client_list_id : data.client_list_id,
          status : data.status,
          lead_url: data.lead_url});
      });
    }, [inputs.start_date, inputs.end_date, inputs.client_list_id]);

    function onChange(e){
      const {name, value } = e.target;
      setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    function onSubmit(e){
      e.preventDefault()
      dispatch(editCampagins(id,inputs))
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
        props.history.push("/campaigns/Campaigns");
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
                <Form.Control type="text" value={inputs.name} name="name" onChange={onChange} placeholder="Enter your name" />
              </Form.Group>
           </Col>
           <Col md={6} className="mb-3">
           <Form.Group id="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={inputs.description} name="description" onchange={onChange} placeholder="Enter your description" />
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
                <Form.Select id="client" onChange={handleChange}>
                    
                    {
                     clientlist.clients.map(item =>
                     <option id={item.id} value={item.client_list_id }>
                        {item.name}
                        
                     </option>
                    ) 
                    }

                </Form.Select>
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