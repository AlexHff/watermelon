import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Apple from './Apple';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Apple source="./database/apple.json" />
        </p>
      </div>
    );
  }
}

export default App;
