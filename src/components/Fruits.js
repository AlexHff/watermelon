import React from 'react';

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database/apple.json');
const db = low(adapter);

class Apple extends React.Component {
    render() {
        return(
            <div>
                <h1>Apple</h1>
            </div>
        );
    }
}

export default Apple;