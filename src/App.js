import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Default from "./components/Default";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Switch>
                    <Route exact path="/" />
                    <Route component={Default} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
