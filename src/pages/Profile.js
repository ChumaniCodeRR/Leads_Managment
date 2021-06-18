import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp , faArrowDown, faArrowUp , faEdit, faEllipsisH, faExternalLinkAlt, faEye, faPersonBooth, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck, faCog, faHome, faPlus ,faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import { faAmilia, faPhabricator } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { getProfile, updateProfile } from '../actions/UserProfileActions';
import { Nav, Card, Image, Table , ProgressBar, Pagination  } from '@themesberg/react-bootstrap';


const Profile = () => {

    const [inputs, setInputs] = useState({
        name:"",
        email: "",
    });

  const { register, handleSubmit, watch, errors } = useForm();

  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const { name, email } = inputs;

  function onChange(e) {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  function onSubmit() {
    dispatch(updateProfile(inputs)).then((tr) => {
     console.log(tr)
    });
    successMessage()
    setInputs({name:'',email:''})
  }
  
  function successMessage() {
    Swal.fire({
      icon: "success",
      title: "Profile successfully updated",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  
  return(
      <>
       <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="d-block mb-4 mb-md-0">
            <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
              <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
              <Breadcrumb.Item>Vetro Lead</Breadcrumb.Item>
              <Breadcrumb.Item active>User Profile</Breadcrumb.Item>
            </Breadcrumb>
            <h4>Profile</h4>
          </div>
        </div>
        <Card border="light" className="table-wrapper table-responsive shadow-sm">
        <Card.Body className="pt-0">
          <Card.Header>
          <Row>
             <Col xs={8} md={6} lg={3} xl={4}>
             <div className="alert alert-primary" role="alert">
               Current details : {profile.name} , {profile.email}
            </div>
             </Col>
            </Row>
          </Card.Header>
        
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={onChange}
                ref={register({ required: true })}
              />
              {errors.name && (
                <div className="text-danger">This field is required</div>
              )}
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
                ref={register({ required: true })}
              />
              {errors.email && (
                <div className="text-danger">This field is required</div>
              )}
            </div>

            <button type="submit" className="btn btn-dark">UPDATE</button>
          </form>

        </Card.Body>
        </Card>
      </>
  )
}
export default Profile