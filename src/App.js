import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Default from "./components/Default";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route component={Default} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
