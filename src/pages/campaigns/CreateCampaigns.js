import React, { useEffect, useState } from 'react';
import Datetime from "react-datetime";
import moment from "moment-timezone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faPhoneSquare ,faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore , faHome} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup, FormGroup , Breadcrumb , Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { Routes } from "../../routes";
import { createNewCampaign } from '../../actions/CampaignActions'
import { Link, NavLink } from 'react-router-dom';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { getAllClients } from '../../actions/ClientActions';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";
import Checkbox from 'rc-checkbox';
import Select  from 'react-select';

const CreateNewCampaign = (props) => {
   
    //const [birthday, setBirthday] = useState("");
    const [inputs, setInputs] = useState({
      name:"",
      description:"",
      start_date:"",
      end_date:"",
      client_list_id: "",
    })

    const { register , handleSubmit, formState: { errors } }  = useForm();
    const { name, description , start_date , end_date , client_list_id } = inputs;
    const dispatch = useDispatch();
    const clientlist = useSelector((state) => state.clients);

    const [clients, setClients] = useState([]);

    const id = props.match.params.id;

    const [isloading, setisloading] = useState(false);
    // set value for default selection
    const [selectedValue, setSelectedValue] = useState(0);

    const [selected, setSelected] = React.useState({});

    const [startdate, setStartDate] = useState("");
    const [enddate, setEndDate] = useState("");

    const handleInputChange = e => {
      const { name, checked } = e.target;
      setSelected(selected => ({
        ...selected,
        [name]: checked
      }));
    };

    // check for Id selected in client list continue 
    const handleChange = e => {

      setSelectedValue(e.value);
      const index = e.target.selectedIndex;
      const el = e.target.childNodes[index]
      const option =  el.getAttribute('id');  
    }

    function onChange(e) {
      const { name, value } = e.target;
      setInputs((inputs) => ({ ...inputs, [name]: value }));
    }

    useEffect(() => {
      setisloading(true);
      dispatch(getAllClients()).then(() => {
        setisloading(false);
      });
      setClients(clientlist.clients);

      setStartDate(inputs.start_date);
      setEndDate(inputs.end_date);
      
    }, [clients]);

    function onSubmit() {
      dispatch(createNewCampaign(inputs))
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
        //props.history.push(`/client-users/clientUsers/${id}`);
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
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="name">
                <Form.Label>Name (*)</Form.Label>
                <Form.Control 
                required 
                type="text" 
                value={name} 
                placeholder="Enter Name..." 
                onChange={onChange} 
                name="name" />
              </Form.Group>
              {errors.name && (
                <div className="text-danger">This field is required</div>
              )}
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="description">
                <Form.Label>Description (*)</Form.Label>
                <Form.Control 
                required 
                type="text" 
                value={description} 
                placeholder="Enter Description..." 
                onChange={onChange} name="description" />
              </Form.Group>
              {errors.description && (
                <div className="text-danger">This field is required</div>
              )}
            </Col>
            </Row>
            <Row>
            <Col md={6} className="mb-3">
            <Form.Group id="startdate">
                <Form.Label>Start-Date(*)</Form.Label>
                <input
                  type="date"
                  timeFormat={true}
                  name="start_date"
                  onChange={onChange}
                  className="form-control"
                  value={start_date}
                />
              </Form.Group>
              {errors.start_date && (
                <div className="text-danger">This field is required</div>
              )}
             </Col>
             <Col md={6} className="mb-3">
              <Form.Group id="enddate">
                <Form.Label>End-Date(*)</Form.Label>
                <input
                  type="date"
                  timeFormat={true}
                  name="end_date"
                  onChange={onChange}
                  className="form-control"
                  value={end_date}
                 />
              </Form.Group>
              {errors.end_date && (
                <div className="text-danger">This field is required</div>
              )}
            </Col>
            </Row>
            <Row>
              <Col sm={4} className="mb-3">
                <Form.Group className="mb-2">
                  <Form.Label>Select Client</Form.Label>
                  <Form.Select onChange={handleChange}>
                      {
                        clientlist.clients.map(item =>
                         <option value={item.client_list_id}>
                          {item.name}
                         </option>
                        ) 
                      }
                  </Form.Select>
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