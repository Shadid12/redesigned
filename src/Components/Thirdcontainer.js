import React from 'react';
import { Row } from 'antd';
import { Input } from 'antd';
import MessageList from './MessageList';
import './css/third-container.css';

export default class Thirdcontainer extends React.Component {
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