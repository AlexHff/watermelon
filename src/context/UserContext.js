import React, { Component } from 'react';
import { users as usersDB } from "../database/users";

const UserContext = React.createContext(null);

class UserProvider extends Component {
    state =  {
        users: usersDB
    };

    render() {
        return (
            <UserContext.Provider value={this.state.users}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};
