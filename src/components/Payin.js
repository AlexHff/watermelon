import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class Payin extends Component {
    constructor(props) {
        super(props);
        var wid = JSON.parse(localStorage.getItem('wallet')).id;
        var payins = JSON.parse(localStorage.getItem('payins'));
        var pid = payins[payins.length - 1].id + 1;
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
        var payins = JSON.parse(localStorage.getItem('payins'));
        var payin = this.state;
        var index = wallets.findIndex(wallet => wallet.id === this.state.wallet_id);
        wallet.amount += parseFloat(this.state.amount, 10) * 100;
        if (index !== -1)
            wallets[index] = wallet;
        else
            wallets.push(wallet);
        payin.amount = parseFloat(payin.amount, 10) * 100;
        payins.push(payin);
        localStorage.setItem('wallet', JSON.stringify(wallet));
        localStorage.setItem('wallets', JSON.stringify(wallets));
        localStorage.setItem('payins', JSON.stringify(payins));
        this.props.history.push('/wallet');
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
            <div className="Payin">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGridAmount">
                        <Form.Control
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            min="0"
                            step=".01"
                            required
                            value={this.state.amount}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridCard">
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
                        Payin
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Payin;
