import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import PrivateRoute from './PrivateRoute';
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Default from "./components/Default";
import Wallet from "./components/Wallet";
import Login from "./components/Login";
import Register from "./components/Register";
import User from "./components/User";
import Card from "./components/Card";
import Payin from "./components/Payin";

import { cards } from "./database/cards";
import { payins } from "./database/payins";
import { payouts } from "./database/payouts";
import { transfers } from "./database/transfers";
import { users } from "./database/users";
import { wallets } from "./database/wallets";

class App extends Component {
    databaseLoader = () => {
        if (!localStorage.getItem('cards'))
            localStorage.setItem('cards', JSON.stringify(cards));
        if (!localStorage.getItem('payins'))
            localStorage.setItem('payins', JSON.stringify(payins));
        if (!localStorage.getItem('payouts'))
            localStorage.setItem('payouts', JSON.stringify(payouts));
        if (!localStorage.getItem('transfers'))
            localStorage.setItem('transfers', JSON.stringify(transfers));
        if (!localStorage.getItem('users'))
            localStorage.setItem('users', JSON.stringify(users));
        if (!localStorage.getItem('wallets'))
            localStorage.setItem('wallets', JSON.stringify(wallets));
    }

    render() {
        this.databaseLoader();
        return (
            <div className="App">
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <PrivateRoute path="/wallet" component={Wallet} />
                    <PrivateRoute path="/card" component={Card} />
                    <PrivateRoute path="/payin" component={Payin} />
                    <PrivateRoute path="/me" component={User} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={Default} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
