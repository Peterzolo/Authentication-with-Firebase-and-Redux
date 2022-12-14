import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./Login.css"

const Login = () => {
  return (
    <div className="container">
      <div className="row px-4">
        <div className="col-md-3">Left</div>
        <div className="col-md-6">
          {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-6" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-md-3">Right</div>
      </div>
    </div>
  );
};

export default Login;
