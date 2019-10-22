import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

var users = JSON.parse(localStorage.getItem('users'));

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        };
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        var index = users.findIndex(user => user.email === this.state.email);
        if (index >= 0) {
            alert('User already exists');
        } else {
            var uid = users[users.length - 1].id + 1;
            var user = {
                id: uid,
                first_name: this.state.firstname,
                last_name: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                is_admin: false
            };
            users.push(user);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = "/";
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="Register">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="firstname">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            name="firstname"
                            type="text"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                            placeholder="Enter your first name" />
                    </Form.Group>

                    <Form.Group controlId="lastname">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            name="lastname"
                            type="text"
                            value={this.state.lastname}
                            onChange={this.handleChange}
                            placeholder="Enter your last name" />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="Submit">
                        Submit
                    </Button>
                </Form>
                <Link to="/login">Already have an account?</Link>
            </div>
        );
    }
}

export default Register;
