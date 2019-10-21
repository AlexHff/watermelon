import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from "./Context";

ReactDOM.render(
    <UserProvider>
        <Router>
            <App />
        </Router>
    </UserProvider>,
    document.getElementById('root')
);
