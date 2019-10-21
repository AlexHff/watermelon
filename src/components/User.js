import React, { Component } from 'react';
import { UserConsumer } from "../context/UserContext";

class User extends Component {
    render() {
        return (
            <UserConsumer>
                {(users) => {
                    users.push({
                        id: 3,
                        first_name: 'Jeremy',
                        last_name: 'Roca',
                        email: 'saladetomateoignon@gmail.com',
                        password: 'loko',
                        is_admin: false
                    });
                    console.log(users);
                }}
            </UserConsumer>
        );
    }
}

export default User;
