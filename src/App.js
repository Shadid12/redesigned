import React, { Component } from 'react';
import MainSideNav from './Components/MainSideNav';
import { Row, Col } from 'antd';

import './App.css';

export default class App extends Component {
    render() {
        return(
            <div>
                <Row>
                    <Col span={2}>
                        <MainSideNav />
                    </Col>
                    <Col span={12}>col-12</Col>
                </Row>
            </div>
        )
    }
}