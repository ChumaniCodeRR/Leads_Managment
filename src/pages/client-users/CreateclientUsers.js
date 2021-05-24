import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faPhoneSquare ,faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore , faHome} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup , FormGroup , Breadcrumb , Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../../components/Widgets";
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';
import { createNewClientUsers } from '../../actions/clientUsersActions';
import { getAllClients } from '../../actions/ClientActions';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";
import Checkbox from 'rc-checkbox';
import Select  from 'react-select';



const CreateClientUsers = (props) => {
  // Countinue 
  
  const [inputs, setInputs] = useState({
    first_name:"",
    last_name:"",
    email:"",
    mobile:"",
    client_list_id: "19",
  })

    const { register , handleSubmit, formState: { errors } }  = useForm();
    const { first_name, last_name , email , mobile , client_list_id } = inputs;
    const dispatch = useDispatch();
    const clientlist = useSelector((state) => state.clients);

    const [clients, setClients] = useState([]);

    const id = props.match.params.id;
    
    const [isloading, setisloading] = useState(false);
   // set value for default selection
    const [selectedValue, setSelectedValue] = useState(0);


  const [selected, setSelected] = React.useState({});

  const handleInputChange = e => {
    const { name, checked } = e.target;
    setSelected(selected => ({
      ...selected,
      [name]: checked
    }));
  };
    
  
 
// handle onChange event of the dropdown
   const handleChange = e => {
     setSelectedValue(e.value);
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
    }, [clients]);


    function onSubmit() {
      dispatch(createNewClientUsers(inputs))
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
        props.history.push(`/client-users/clientUsers/${id}`);
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
               <NavLink as={Link} to={Routes.ClientUsers.path}>
                 Client Users
               </NavLink>           
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Create New Client User</Breadcrumb.Item>
             </Breadcrumb>
           </div>
           <Dropdown>
             <Dropdown.Toggle as={Button} variant="secondary" className="text-dark me-2">
              <FontAwesomeIcon icon={faPhoneSquare} className="me-2" />
              <span>New Client User</span>
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
              <Form.Group id="clientinfo">
                <Form.Label>First Name(*)</Form.Label>
                <Form.Control required type="text" placeholder="Enter your first name" value={first_name} onChange={onChange} name="first_name"/>
              </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="name">
                <Form.Label>Last Name (*)</Form.Label>
                <Form.Control required type="text" placeholder="Enter your last name" value={last_name} onChange={onChange} name="last_name" />
              </Form.Group>
            </Col>          
            </Row>
            <Row>
             <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Email (*)</Form.Label>
                <Form.Control required type="email" placeholder="name@company.com" value={email} onChange={onChange} name="email" />
              </Form.Group>
             </Col>
            </Row>
            <Row>
             <Col md={6} className="mb-3">
                <Form.Group id="contact">
                <Form.Label>Mobile (*)</Form.Label>
                <Form.Control required type="number" placeholder="+ 27 11 939 4334" value={mobile} onChange={onChange} name="mobile" />
                </Form.Group>
             </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                 <Form.Group id="clientId">
                   <Form.Label>Select Client</Form.Label>
                   <Form.Select id="client" onChange={handleChange}>
                     {
                       clientlist.clients.map((item)=>{
                           return <option key={item.id} value={item.id}>{item.name}</option>
                       })
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
    )

}

export default CreateClientUsers