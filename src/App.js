import React, { Component } from 'react';
import MainSideNav from './Components/MainSideNav';
import SecondarySideNav from './Components/SecondarySideNav';
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
                    <Col span={6}>
                        <SecondarySideNav />
                    </Col>
                </Row>
            </div>
        )
    }
}