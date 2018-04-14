import React, { Component } from 'react';
import InitialMainState from './Components/InitialMainState';
import InitialLoginState from './Components/InitialLoginState';
import { observer } from "mobx-react"

// stores
// import UserDataStore from './stores/UserDataStore';

import './App.css';

@observer
export default class App extends Component {
    render() {

        const current_state = this.props.store.loggedin ? (
            <InitialMainState />
        ) : ( <InitialLoginState store={this.props.store} /> )

        return(
            <div>
                {current_state}
            </div>
        )
    }
}