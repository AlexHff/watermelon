import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

var users = JSON.parse(localStorage.getItem('users'));

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        var index = users.findIndex(user => user.email === this.state.email);
        if (index >= 0 && users[index].password === this.state.password) {
            const user = users[index];
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = "/";
        } else {
            alert("Wrong email or password");
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Password"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="Submit">
                        Submit
                    </Button>
                </Form>
                <p><Link to="/register">Create an account</Link></p>
            </div>
        );
    }
}

export default Login;
