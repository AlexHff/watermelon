import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";

var user = JSON.parse(localStorage.getItem('user'));

class User extends Component {
    render() {
        return (
            <div className="User">
                <Container>
                    <Row>
                        <Col>First name</Col>
                        <Col>{user.first_name}</Col>
                    </Row>
                    <Row>
                        <Col>Last name</Col>
                        <Col>{user.last_name}</Col>
                    </Row>
                    <Row>
                        <Col>Email address</Col>
                        <Col>{user.email}</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default User;
