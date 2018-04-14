import React, { Component } from 'react';
import InitialMainState from './Components/InitialMainState';
import InitialLoginState from './Components/InitialLoginState';

import './App.css';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            user_logged_in: false
        }
    }
    render() {

        const current_state = this.state.user_logged_in ? (
            <InitialMainState />
        ) : ( <InitialLoginState /> )

        return(
            <div>
                {current_state}
            </div>
        )
    }
}