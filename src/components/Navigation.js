import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";

class Navigation extends Component {
    handleClick = (event) => {
        event.preventDefault();
        localStorage.removeItem('user');
        window.location.href = "/";
    }

    render() {
        var user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" width="42" height="auto" style={{ transform: "rotate(45deg)" }} />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/wallet">Wallet</Nav.Link>
                    {user ? (
                        <Nav.Link href="/" onClick={this.handleClick}>Logout</Nav.Link>
                    ) : (
                        <Nav.Link href="/login">Login</Nav.Link>
                    )}
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {user ? (
                        <Navbar.Text className="justify-content-end">
                            Hello, {user.first_name}
                        </Navbar.Text>
                    ) : (
                        <Navbar.Text className="justify-content-end">
                            Hello
                        </Navbar.Text>
                    )}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
