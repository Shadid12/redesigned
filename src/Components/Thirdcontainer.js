import React from 'react';
import { Row } from 'antd';
import { Input , notification, Icon} from 'antd';
import openSocket from 'socket.io-client';

import MessageList from './MessageList';
import './css/third-container.css';

export default class Thirdcontainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            users_in_room: []
        }
        
        this.socket = openSocket('localhost:5000', { query: "foo=bar" });

        this.socket.on('JOINED_ROOM', (data) => {
            notification.open({
                message: `${data.user} joined conversation`,
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
                        <MessageList socket={this.socket}/>
                    </div>
                </Row>
            </div>
        )
    }
}