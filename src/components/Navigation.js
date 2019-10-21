import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" width="42" height="auto" style={{transform: "rotate(45deg)"}} />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="wallet">Wallet</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Hello, Friedrich
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
