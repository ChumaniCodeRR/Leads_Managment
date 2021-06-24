
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { ResetPassword } from '../actions/ResetPassword';
import { Routes } from "../routes";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function ResetPasswordPage () {

   const[inputs, setInputs] = useState({
     email: "",
   });

   const {register, handleSubmit, formState: { errors } } = useForm();
   //const { register, handleSubmit, errors } = useForm();
   const { email } = inputs;
   const dispatch = useDispatch();
   const history = useHistory();

   function onChange(e){
     const { name, value } = e.target;
     setInputs((inputs) => ({...inputs, [name]: value }));
   }

   function onSubmit() {
     dispatch(ResetPassword(inputs))
     .then(() => {
       history.push("/");
     })
     .catch(() => {
       errorMessage()
     })
   }
  
   function errorMessage() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password or username is incorrect!',
      })
  }

  return (
    
      <section className="bg-soft d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center">
            <p className="text-center">
              <Card.Link as={Link} to={Routes.Signin.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
              </Card.Link>
            </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3 className="mb-4">Reset password</h3>

                <Form onSubmit={handleSubmit(onSubmit)} >
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <input
                      //autoFocus 
                      required 
                      name="email"
                      type="email" 
                      placeholder="example@company.com" 
                      value={email}
                      onChange={onChange}
                      //ref={register({ required: true })}
                      {...register('email', { required: true })}
                      />
                    </InputGroup>
                  </Form.Group>
                  {errors.email && (
                   <div className="text-danger">This field is required</div>
                  )}
                  <Button variant="primary" type="submit">
                    Reset password
                  </Button>
                </Form>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    
  );
}
