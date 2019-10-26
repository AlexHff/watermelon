import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Cards from 'react-credit-cards';

class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem('wallet'));
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
        cards.forEach(card => {
            if (card.user_id !== user.id)
                cards.splice(cards.indexOf(card), 1);
        });
        const listCards = cards.map((card) =>
            <div key={card.id} className="listCards">
                <Cards
                    number={"000000000000" + card.last_four}
                    name={user.first_name + ' ' + user.last_name}
                    expiry={card.expired_at}
                    cvc=''
                />
                <Button variant="danger" onClick={() => this.handleDelete(card, cards)}>Delete</Button>
            </div>
        );
        return listCards;
    }

    render() {
        const listCards = this.getCards();
        return (
            <div className="Wallet">
                <h1>{this.state.amount} €</h1>
                <Link to="/payin">
                    <Button variant="success">Payin</Button>
                </Link>
                <Link to="/payout">
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
