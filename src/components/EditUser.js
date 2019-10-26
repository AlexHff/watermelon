import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class EditUser extends Component {
    constructor(props) {
        super(props);
        const user = JSON.parse(localStorage.getItem('user'));
        this.state = {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            is_admin: user.is_admin
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        localStorage.setItem('user', JSON.stringify(this.state));
        //this.props.history.push('/me');
    }
    
    render() {
        return (
            <div className="EditUser">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGridFirstname">
                        <Form.Control
                            type="text"
                            name="first_name"
                            value={this.state.first_name}
                            required
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridLastname">
                        <Form.Control
                            type="text"
                            name="last_name"
                            value={this.state.last_name}
                            required
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridEmail">
                        <Form.Control
                            type="email"
                            name="email"
                            value={this.state.email}
                            required
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                        <Form.Control
                            type="password"
                            name="password"
                            value={this.state.password}
                            required
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default EditUser;
