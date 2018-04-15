import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Modal, Button} from 'antd';
import random from 'random-name';

import './css/login-state.css';

export default class InitialLoginState extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: true
        }
    }
    render() {
        return(
            <div>
                <Modal
                    visible={this.state.visible}
                    footer={null}
                >
                    <div className="btn-container">
                        <div className="login--button">
                            <GoogleLogin
                                clientId="1043178444240-fit0566r45gcbvog4tei1pour1ba436t.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogleFail}
                                
                            />
                        </div>
                        <br />
                        <span>Or</span>
                        <div className="login--button">
                            <Button onClick={this.anonLogin}>Login Anonymous</Button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

    responseGoogle = (response) => {
        if (response) {
            let userObject = {
                username: response.profileObj.givenName,
                img: response.profileObj.imageUrl
            }
            this.props.store.userObject = userObject;
            this.props.store.loggedin = true;
        }
        else {
            console.log('Could not authorize');
        }
    }

    anonLogin = () => {
        let userObject = {
            username: `Anonyous ${random.first()}`,
            img: ""
        }
        this.props.store.userObject = userObject;
        this.props.store.loggedin = true;
    }
}