
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

export default function ResetPasswordPage() {

   const [isLoading, setIsLoading] = useState(false);
   
   const[inputs, setInputs] = useState({
     email: "",
   });

   //const {register, handleSubmit, formState: { errors } } = useForm();
   const { email } = inputs;
   const dispatch = useDispatch();
   const history = useHistory();

  function validateForm(){
    return inputs.email.length > 0;
  }

   function onChange(e){
     const { name, value } = e.target;
     setInputs((inputs) => ({...inputs, [name]: value }));
   }

   async function handleSubmit(event) {
     event.preventDefault();
     setIsLoading(true);
     try {
       await dispatch(ResetPassword(inputs))
       .then(() => {
        history.push("/");
       })
     } catch (e) {
       errorMessage(e);
      setIsLoading(false);
     }
   }
  
   function errorMessage() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password or username is incorrect!',
      })
  }


  return (
    <main>
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
                <Form onSubmit={handleSubmit} >
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control 
                      //autoFocus 
                      required 
                      name="email"
                      type="email" 
                      placeholder="example@company.com" 
                      value={email}
                      onChange={onChange}
                      //{...register('email', { required: true })}
                      />
                    </InputGroup>
                  </Form.Group>
                  
                  <Button variant="primary" type="submit"
                   isLoading={isLoading}
                   disabled={!validateForm()}>
                    Reset password
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
