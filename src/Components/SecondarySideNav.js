import React, { Component } from 'react';
import { observer } from "mobx-react"
import { Input, List, Avatar, Modal, Button } from 'antd';
import GoogleLogin from 'react-google-login';
import axios from 'axios';


import './css/secondary-nav.css';

@observer
export default class SecondarySideNav extends Component { 
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
    }

    render() {

        const {data, filter, filteredData} = this.props.store;

        const google_auth_modal = this.state.visible ? (
            <div>
                <Modal
                    visible={this.state.visible}
                    footer={null}
                    onCancel={this.cancelModal}
                >
                    <div className="btn-container">
                        <div className="login--button">
                            <GoogleLogin
                                clientId="1043178444240-fit0566r45gcbvog4tei1pour1ba436t.apps.googleusercontent.com"
                                buttonText="Authorize translation"
                                scope="https://www.googleapis.com/auth/cloud-translation https://www.googleapis.com/auth/drive"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogleFail}
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        ) : null;

        return(
            <div className="secondary-main">
                <div className="search-wrapper">
                    <Input
                        placeholder="input search text"
                        value={filter}
                        onChange={this.filter}
                        style={{ width: 200 }}
                    />
                </div>
                <div className="sec-content-wrapper">
                    <List
                        itemLayout="horizontal"
                        dataSource={filteredData}
                        renderItem={item => (
                        <List.Item style={{ 'display': 'block' }}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.img} />}
                                title={<span>{item.title}</span>}
                                description={item.description}
                            />
                            <Button onClick={this.openModal} 
                                    value={item.title}
                            >
                                Open
                            </Button>
                        </List.Item>
                        )}
                    />
                </div>
                {google_auth_modal}
            </div>
        )
    }

    openModal = (e) => {
        if (e.target.value === 'Google Translation') {
            this.setState({visible: true});
        }
    }

    filter = (e) => {
        this.props.store.filter = e.target.value
    }

    cancelModal = () => {
        this.setState({visible: false});
    }

    responseGoogle = (response) => {
        if (response.accessToken) {
            this.props.userDataStore.userObject.translation_token = response.accessToken;
            // axios.defaults.headers.common['Authorization'] = "Bearer " + response.accessToken;
            this.setState({visible: false});
        }
        else {
            console.log('Could not authorize');
        }
    }
}