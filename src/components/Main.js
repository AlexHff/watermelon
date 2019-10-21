import React, { Component } from 'react';
import { Jumbotron, Button } from "react-bootstrap";
import User from "./User";

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
                        <Button variant="primary">Send Money Now</Button>
                    </p>
                </Jumbotron>
                <User />
            </div>
        );
    }
}

export default Main;
