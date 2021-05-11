import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp , faArrowDown, faArrowUp , faEdit, faEllipsisH, faExternalLinkAlt, faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck, faTasks , faPlus , faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAmilia, faPhabricator } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';
import Spinner from '../../helpers/spinner';
import Swal from "sweetalert2";
import { Routes } from "../../routes";
import { Link, NavLink } from 'react-router-dom';
import {getAdminById,ActOrDeactAdmin} from "../../actions/AdminActions";


const AdminStatus = (props) => {

    const [inputs, setInputs] = useState({
        is_active: "",
       });

     const { is_active } = inputs;
     const id = props.match.params.id;
     const dispatch = useDispatch();
    //get info
     useEffect(() => {
        dispatch(getAdminById(id)).then((data) => {
          setInputs({is_active: data.is_active ,first_name: data.first_name, last_name: data.last_name});
        });
      }, []);

      function onChange(e){
        const {name, value } = e.target;
        setInputs((inputs) => ({ ...inputs, [name]: value }));
      }

      function onSubmit(e){
        e.preventDefault()
        dispatch(ActOrDeactAdmin(id,inputs))
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
          props.history.push("/admin/Administration");
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
               Administration
            </NavLink>           
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Status </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        </div>
 
          <Row className="justify-content-center form-bg-image">
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border border-light rounded p-4 p-lg-5 w-100 fmxw-500">
              <div className="text-center text-md-center mb-4 mt-md-0">
                  <div className="user-avatar large-avatar mx-auto mb-3 border-dark p-2">              
                  </div>
                  <h3 className="mb-3">{inputs.first_name} {inputs.last_name}</h3>
                </div>
                <Form onSubmit={onSubmit} className="mt-5">  
                 <p className="text-gray">
                    <Row>
                        <Col>
                            <Form.Check label="Active " defaultChecked value={is_active} id="checkbox1" htmlFor="checkbox1" />
                        </Col>
                        <Col>
                            <Form.Check label="In-Active  " value={is_active} id="checkbox1" htmlFor="checkbox1" />
                        </Col>
                    </Row>
                  </p>
                  <Button variant="primary" type="submit" className="w-40">
                    Save
                  </Button>
                </Form>              
              </div>
            </Col>
          </Row>            
        </>
        )
}

export default AdminStatus