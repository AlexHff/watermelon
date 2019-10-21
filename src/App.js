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

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <PrivateRoute path="/wallet" component={Wallet} />
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
