import React, { Component } from 'react';
import MainSideNav from './Components/MainSideNav';
import SecondarySideNav from './Components/SecondarySideNav';
import ThirdContainer from './Components/Thirdcontainer';
import { Row, Col } from 'antd';

// stores
import PluginStore from './stores/PluginStore';


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
                        <SecondarySideNav store={PluginStore}/>
                    </Col>
                    <Col span={8}>
                        <ThirdContainer />
                    </Col>
                </Row>
            </div>
        )
    }
}