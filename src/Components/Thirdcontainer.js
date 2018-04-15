import React from 'react';
import { Row } from 'antd';
import { notification, Icon} from 'antd';
import openSocket from 'socket.io-client';

import MessageList from './MessageList';
import { observer } from "mobx-react"
import './css/third-container.css';

@observer
export default class Thirdcontainer extends React.Component {
    constructor(props) {
        super(props);
        this.socket = openSocket('localhost:5000', { query: `userName=${this.props.store.userObject.username}` });
        this.socket.on('JOINED_ROOM', (data) => {

            notification.open({
                message: `${data.username} joined conversation`,
                description: 'A new user has joined conversation',
                icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
            });
        });
    }

    render() {
        return(
            <div className="third-container-wrapper">
                <Row>
                    <div className="message--container">
                        <MessageList socket={this.socket} store={this.props.store}/>
                    </div>
                </Row>
            </div>
        )
    }
}