import React from 'react';
import { Row } from 'antd';
import { Input } from 'antd';
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
            console.log(data.user);
        });
    }

    render() {
        const Search = Input.Search;

        return(
            <div className="third-container-wrapper">
                <Row>
                    <div className="message--container">
                        <MessageList />
                    </div>
                    <div>
                        <Search placeholder="write message" enterButton="Post" size="large" />
                    </div>
                </Row>
            </div>
        )
    }
}