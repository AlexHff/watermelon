import React, { Component } from 'react';
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Jumbotron>
                    <h1>Send money to friends and family.</h1>
                    <p>
                        It's free to send money to friends and family when you use your wallet balance.
                    </p>
                    <p>
                        <Link to="/wallet">
                            <Button variant="primary">Send Money Now</Button>
                        </Link>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default Main;
