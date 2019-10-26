import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

class Navigation extends Component {
    handleClick = (event) => {
        event.preventDefault();
        localStorage.removeItem('user');
        localStorage.removeItem('wallet');
        window.location.href = "/";
    }

    render() {
        var user = JSON.parse(localStorage.getItem('user'));
        return (
            <Navbar bg="dark" variant="dark">
                <Link to="/" style={{color: 'white', marginRight: '10px'}}>
                    <img src={logo} alt="logo" width="42" height="auto" style={{ transform: "rotate(45deg)" }} />
                </Link>
                <Nav className="mr-auto">
                    <Link to="/" style={{color: 'white', marginRight: '10px'}}>Home</Link>
                    <Link to="/wallet" style={{color: 'white', marginRight: '10px'}}>Wallet</Link>
                    <Link to="/transfer" style={{color: 'white', marginRight: '10px'}}>Transfer</Link>
                    {user ? (
                        <Link to="/" onClick={this.handleClick} style={{color: 'white', marginRight: '10px'}}>Logout</Link>
                    ) : (
                        <Link to="/login" style={{color: 'white', marginRight: '10px'}}>Login</Link>
                    )}
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {user ? (
                        <Navbar.Text className="justify-content-end">
                            Hello, <Link to="/me">{user.first_name}</Link>
                        </Navbar.Text>
                    ) : (
                        <Navbar.Text className="justify-content-end">
                            You must be logged in to send money
                        </Navbar.Text>
                    )}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;
