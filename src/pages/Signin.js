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
import axios from "axios";

const Signin = (props) => {

 // const { register, handleSubmit, errors } = useForm();
  const[inputs, setInputs] = useState({
    email:"",
    password:"",
 });

 const [isloading , setisloading] = useState(false)
 //const { register , handleSubmit, formState: { errors } } = useForm();
 const { register, handleSubmit, formState: { errors }} = useForm();
 //const { register, handleSubmit, errors } = useForm();
 const { email, password } = inputs;

 const dispatch = useDispatch();

 //const email = useFormInput('');
// const password = useFormInput('');
 //const [error, setError] = useState(null);

 
 function onChange(e){
  const { name, value } = e.target;
  setInputs(inputs => ({ ...inputs, [name]: value }));
}

 /*function onSubmit(e) {
  setisloading(true)
  dispatch(login(inputs))
     .then(res => {
       setisloading(false) 
       props.history.push("/dashboard/overview");
     })
     .catch(() => {
       errorMessage()
     })
  }*/

  function onSubmit(e){
    if(inputs.email && inputs.password) {
      dispatch(login(inputs))
      props.history.push('/dashboard/overview')
    } else {
      errorMessage();
    }
  }

 function errorMessage(){
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
              <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <Form.Group className="mb-4">
                  <Form.Label>Your Email</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                    <Form.Control 
                    //autoFocus 
                   // inputRef={register({ required: true })}
                    name="email" 
                    value={email} 
                    //{...register(email)}
                    //required 
                    //{...register("message", {
                      //required: "Required",
                    //})}
                    //
                    onChange={onChange}
                    type="email" 
                    autoComplete="off"
                    placeholder="example@company.com"
                    //{...register('email')}
                    />
                  </InputGroup>      
                </Form.Group>
                {errors.message && errors.message.message}
                <Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control 
                      //inputRef={register({ required: true })} 
                      type="password" 
                      placeholder="Password"
                      value={password}
                      {...register(password)}
                      name="password"
                      //{...register("message", {
                     //   required: "Required",
                     // })}
                      autoComplete="off"
                      onChange={onChange}
                      //{...register('password', { required: true })}
                      />
                    </InputGroup>
                  </Form.Group>
                  {errors.password && errors.password.message}
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
                {isloading && <Spinner/>}
              </Form>
            
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

