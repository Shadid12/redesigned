import React, { Component } from 'react';
import MainSideNav from './MainSideNav';
import SecondarySideNav from './SecondarySideNav';
import ThirdContainer from './Thirdcontainer';
import RoomsList from './RoomsList';
import { Row, Col } from 'antd';

// stores
import PluginStore from '../stores/PluginStore';
import UserDataStore from '../stores/UserDataStore';

export default class initialMainState extends Component {
    render() {
        return(
            <div>
                <Row>
                    <Col span={2}>
                        <MainSideNav store={UserDataStore}/>
                    </Col>
                    <Col span={6}>
                        <SecondarySideNav store={PluginStore} userDataStore={UserDataStore}/>
                    </Col>
                    <Col span={8}>
                        <ThirdContainer store={UserDataStore}/>
                    </Col>
                    <Col span={2}>
                        <RoomsList store={UserDataStore} />
                    </Col>
                </Row>
            </div>
        )
    }
}