import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div className="Register">
                <Form>
                    <Form.Group controlId="firstname">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name " />
                    </Form.Group>

                    <Form.Group controlId="lastname">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Link to="/login">Already have an account?</Link>
            </div>
        );
    }
}

export default Register;
