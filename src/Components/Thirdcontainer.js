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
        this.socket = openSocket('chitchatsocket.herokuapp.com', { query: `userName=${this.props.store.userObject.username}` });
        this.socket.emit('create', this.props.store.current_room);
        this.socket.on('JOINED_ROOM', (data) => {

            notification.open({
                message: `${data.username} joined ${data.room}`,
                description: 'A new user has joined conversation',
                icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
            });
        });
    }

    componentDidUpdate() {
        this.socket.emit('create', this.props.store.current_room);
        this.props.store.joined_room = this.props.store.current_room;
    }

    render() {
        return(
            <div className="third-container-wrapper">
                <Row>
                    <div className="message--container">
                        <MessageList socket={this.socket} store={this.props.store}/>
                    </div>
                    <div>Current Room: {this.props.store.current_room}</div>
                </Row>
            </div>
        )
    }
}