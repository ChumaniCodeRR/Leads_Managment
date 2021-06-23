import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup, Spinner } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Routes } from "../routes";
import BgImage from "../assets/img/illustrations/signin.svg";
import {login} from '../actions/Authentication';


const Signin = (props) => {

 const[inputs, setInputs] = useState({
    email:"",
    password:"",
 });

 const [isloading , setisloading] = useState(false)
 //const { register , handleSubmit, formState: { errors } } = useForm();
 //const { register, handleSubmit, formState: { errors }} = useForm();
 //const { register, handleSubmit, errors } = useForm();
 //const {register, handleSubmit, formState: { errors }} = useForm();
 
 const { register, handleSubmit, formState: { errors }, reset  } = useForm();
  
 const { email, password } = inputs;
 const dispatch = useDispatch();

 function onChange(e){
  const { name, value } = e.target;
  setInputs((inputs) => ({ ...inputs, [name]: value }));
}


 function onSubmit() {
  setisloading(true)
  dispatch(login(inputs))
      .then((res) => {
       setisloading(false) 
       props.history.push("/dashboard/overview");
     })
     .catch(() => {
       errorMessage()
     })
  }

  /*function onSubmit(e) {
    if(inputs.email && inputs.password) {
      dispatch(login(inputs))
      props.history.push('/dashboard/overview')
    } else {
      errorMessage();
    }
  }*/

 function errorMessage() {
   Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'Password or username is incorrect!',
     })
}

 return (
  <main>
    <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
      <Container>
        <p className="text-center">
          <Card.Link as={Link} to={Routes.Presentation.path} className="text-gray-700">
            <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back 
          </Card.Link>
        </p>
        <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
          <Col xs={12} className="d-flex align-items-center justify-content-center">
            <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h3 className="mb-0">Login on Vetro Lead Management</h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <Form.Group className="mb-4">
                  <Form.Label>Your Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                    <input 
                     type='email' 
                     placeholder="Enter email" 
                     value={email} 
                     onChange={onChange} 
                     className="form-control" 
                     name='email'
                     //{...register("email", {required:true})  }   
                     />    
                    {errors.email && errors.email.type === "required" && (
                       <p className="errorMsg">Email is required.</p>
                    )}
                  </InputGroup>      
                </Form.Group>      
                <Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>  
                      <input
                       type='password'
                       className="form-control"
                       name='password'
                       value={password}
                       onChange={onChange}
                       placeholder="Password"
               
                //{...register("password", {required:true})  }
                //{...register("password")}
                //ref={register}
              />                   
               {errors.password && errors.password.type === "required" && (
                 <p className="errorMsg">Password is required.</p>
               )}
               </InputGroup>
                  </Form.Group>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Form.Check type="checkbox">
                      <FormCheck.Input id="defaultCheck5" className="me-2" />
                      <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Remember me</FormCheck.Label>
                    </Form.Check>
                    <Card.Link className="small text-end" as={Link} to={Routes.ResetPassword.path}>Lost password? 
                    </Card.Link>
                  </div>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign in
                </Button>
              </form>
              {isloading && <Spinner/>}
              <div className="d-flex justify-content-center align-items-center mt-4">
                <span className="fw-normal">
                  Not registered?
                  <Card.Link as={Link} to={Routes.Signup.path} className="fw-bold">
                    {` Create account `}
                  </Card.Link>
                </span>
              </div>
              {isloading && <Spinner/>}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </main>
 );
}

/*
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}*/


export default Signin

