import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

class Transfer extends Component {
    constructor(props) {
        super(props);
        var wid = JSON.parse(localStorage.getItem('wallet')).id;
        var transfers = JSON.parse(localStorage.getItem('transfers'));
        var tid = transfers[transfers.length - 1].id + 1;
        this.state = {
            id: tid,
            debited_wallet_id: wid,
            credited_wallet_id: '',
            amount: '',
            email: ''
        };
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var debitedUser = JSON.parse(localStorage.getItem('user'));
        var debitedWallet = JSON.parse(localStorage.getItem('wallet'));
        var wallets = JSON.parse(localStorage.getItem('wallets'));
        if (this.state.amount * 100 > debitedWallet.amount) {
            alert("You do not have enough money in your wallet.");
        } else {
            var users = JSON.parse(localStorage.getItem('users'));
            var creditedUserIndex = users.findIndex(user => user.email === this.state.email);
            var creditedUser = users[creditedUserIndex];
            if (creditedUserIndex >= 0 && creditedUser.id !== debitedUser.id) {
                var creditedWalletIndex = wallets.findIndex(wallet => wallet.user_id === creditedUser.id);
                var creditedWallet = wallets[creditedWalletIndex];
                creditedWallet.amount += parseFloat(this.state.amount, 10) * 100;
                if (creditedWalletIndex !== -1)
                    wallets[creditedWalletIndex] = creditedWallet;
                else
                    wallets.push(creditedWallet);
                var debitedWalletIndex = wallets.findIndex(wallet => wallet.user_id === debitedUser.id);
                debitedWallet.amount -= parseFloat(this.state.amount, 10) * 100;
                if (debitedWalletIndex !== -1)
                    wallets[debitedWalletIndex] = debitedWallet;
                else
                    wallets.push(debitedWallet);
                localStorage.setItem('wallet', JSON.stringify(debitedWallet));
                localStorage.setItem('wallets', JSON.stringify(wallets))
                var transfers = JSON.parse(localStorage.getItem('transfers'));
                var transfer = {
                    id: this.state.id,
                    debited_wallet_id: debitedWallet.id,
                    credited_wallet_id: creditedWallet.id,
                    amount: this.state.amount * 100
                };
                transfers.push(transfer);
                localStorage.setItem('transfers', JSON.stringify(transfers));
                this.props.history.push('/wallet');
            } else {
                alert("This email doesn't exist");
            }
        }
    }

    render() {
        return (
            <div className="Transfer">
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

                    <Form.Group controlId="formGridEmail">
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Recipient Email Address"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Transfer
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Transfer;
