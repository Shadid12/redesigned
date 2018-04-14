import React, { Component } from 'react';
import MainSideNav from './MainSideNav';
import SecondarySideNav from './SecondarySideNav';
import ThirdContainer from './Thirdcontainer';
import { Row, Col } from 'antd';

// stores
import PluginStore from '../stores/PluginStore';

export default class initialMainState extends Component {
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