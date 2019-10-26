import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Form, Col, Button } from "react-bootstrap";

class Card extends Component {
    constructor(props) {
        super(props);
        var user = JSON.parse(localStorage.getItem('user'));
        this.state = {
            cvc: '',
            expiry: '',
            focus: '',
            name: user.first_name + " " + user.last_name,
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
        if (e.target.name === 'expiry') {
            const value = e.target.value.substr(5, 6) + '/' + e.target.value.substr(2, 2);
            this.setState({ expiry: value });
        } else {
            const { name, value } = e.target;
            this.setState({ [name]: value });
        }
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
        this.props.history.push('/wallet');
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

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridExpiry">
                                <Form.Control
                                    type="month"
                                    name="expiry"
                                    placeholder="Valid thru"
                                    required
                                    min="2019-11"
                                    max="2024-11"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCardIssuer">
                                <Form.Control
                                    as="select"
                                    name="issuer"
                                    placeholder="Brand"
                                    required 
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus}
                                >
                                    <option>VISA</option>
                                    <option>MasterCard</option>
                                    <option>Other</option>
                                </Form.Control>
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
