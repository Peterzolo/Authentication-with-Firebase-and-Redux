import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Register.css"

const Register = () => {
  return (
    <div className="container">
      <div className="row px-4">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          {" "}
          <Form className="main-form" >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Full Name</Form.Label> */}
              <Form.Control type="email" placeholder="Enter your fullname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Confirm Password</Form.Label> */}
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>


            <Button variant="primary" type="submit" className="btn" >
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Register;
