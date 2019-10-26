import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Cards from 'react-credit-cards';

class Wallet extends Component {
    constructor(props) {
        super(props);
        const wallet = JSON.parse(localStorage.getItem('wallet'));
        this.state = {
            id: wallet.id,
            user_id: wallet.user_id,
            amount: wallet.amount,
            show: false
        }
    }

    handleDelete = (card) => {
        const cards = JSON.parse(localStorage.getItem('cards'));
        const cardIndex = cards.findIndex(curCard => curCard.id === card.id);
        cards.splice(cardIndex, 1);
        localStorage.setItem('cards', JSON.stringify(cards));
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
            <div key={card.id} className="listCards" style={{ margin: '30px' }}>
                <Cards
                    number={"000000000000" + card.last_four}
                    name={user.first_name + ' ' + user.last_name}
                    expiry={card.expired_at}
                    cvc=''
                />
                <br />
                <Button variant="danger" onClick={() => this.handleDelete(card)} style={{ marginLeft: '5px' }}>Delete</Button>
            </div>
        );
        return listCards;
    }

    render() {
        const listCards = this.getCards();
        return (
            <div className="Wallet">
                <h2>Watermelon balance</h2>
                <h1>{this.state.amount / 100} €</h1>
                <br />
                <Link to="/payin" style={{ marginRight: '5px' }}>
                    <Button variant="success">Payin</Button>
                </Link>
                <Link to="/payout" style={{ marginLeft: '5px' }}>
                    <Button variant="outline-success">Payout</Button>
                </Link>
                {listCards}
                <Link to="/card">
                    <Button variant="primary">Add Card</Button>
                </Link>
            </div>
        );
    }
}

export default Wallet;
