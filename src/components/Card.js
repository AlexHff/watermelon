import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Form, Col, Button } from "react-bootstrap";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
            issuer: ''
        };
    }

    getUserId = () => {
        var user = JSON.parse(localStorage.getItem('user'));
        return user.id;
    }

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var cards = JSON.parse(localStorage.getItem('cards'));
        var cid = cards[cards.length - 1].id + 1;
        var card = {
            id: cid,
            last_four: this.state.number.substr(this.state.number.length - 4),
            brand: this.state.issuer,
            expired_at: this.state.expiry,
            user_id: this.getUserId()
        }
        cards.push(card);
        localStorage.setItem('cards', JSON.stringify(cards));
        window.location.href = "/wallet";
    }

    render() {
        return (
            <div className="Card">
                <div id="PaymentForm">
                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focus={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formGridCardNumber">
                            <Form.Control
                                type="tel"
                                name="number"
                                placeholder="Card Number"
                                pattern="[\d| ]{16,22}"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </Form.Group>

                        <Form.Group controlId="formGridName">
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                            />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridExpiry">
                                <Form.Control
                                    type="tel"
                                    name="expiry"
                                    placeholder="Valid thru"
                                    pattern="\d\d/\d\d"
                                    required
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCardIssuer">
                                <Form.Control
                                    type="string"
                                    name="issuer"
                                    placeholder="Brand"
                                    required 
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="submit">
                            Add Card
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Card;
