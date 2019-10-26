import React, { Component } from 'react';
import { Form, Col, Button } from "react-bootstrap";

class Payout extends Component {
    constructor(props) {
        super(props);
        var wid = JSON.parse(localStorage.getItem('wallet')).id;
        var payouts = JSON.parse(localStorage.getItem('payouts'));
        var pid = payouts[payouts.length - 1].id + 1;
        this.state = {
            id: pid,
            wallet_id: wid,
            amount: ''
        };
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var wallet = JSON.parse(localStorage.getItem('wallet'));
        var wallets = JSON.parse(localStorage.getItem('wallets'));
        var payouts = JSON.parse(localStorage.getItem('payouts'));
        var payout = this.state;
        if (this.state.amount > wallet.amount) {
            alert("You do not have enough money in your wallet.");
        } else {
            var index = wallets.findIndex(wallet => wallet.id === this.state.wallet_id);
            wallet.amount -= parseFloat(this.state.amount, 10) * 100;
            if (index !== -1)
                wallets[index] = wallet;
            else
                wallets.push(wallet);
            payout.amount = parseFloat(payout.amount, 10) * 100;
            payouts.push(payout);
            localStorage.setItem('wallet', JSON.stringify(wallet));
            localStorage.setItem('wallets', JSON.stringify(wallets));
            localStorage.setItem('payouts', JSON.stringify(payouts));
            this.props.history.push('/wallet');
        }
    }

    getCards = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const cards = JSON.parse(localStorage.getItem('cards'));
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].user_id !== user.id) {
                cards.splice(cards.indexOf(cards[i]), 1);
                i--;
            }
        }
        const listCards = cards.map((card) =>
            <option key={card.id}>{card.brand} {card.last_four} {card.expired_at}</option>
        );
        return listCards;
    }

    render() {
        const listCards = this.getCards();
        return (
            <div className="Payout">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGridAmount">
                        <Form.Control
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            required
                            min="0"
                            step=".01"
                            value={this.state.amount}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCard">
                        <Form.Control
                            as="select"
                            name="card"
                            required 
                            onChange={this.handleInputChange}
                        >
                            {listCards}
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Payout
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Payout;
