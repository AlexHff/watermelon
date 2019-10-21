import React, { Component } from 'react';
import { users } from "./database/users";

const UserContext = React.createContext(null);

class UserProvider extends Component {
    state =  {
        users: users
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
