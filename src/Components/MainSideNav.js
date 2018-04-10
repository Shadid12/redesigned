import React from 'react';
import { Row, Col, Icon, Avatar } from 'antd';

import './css/main-side-nav.css';

export default class MainSideNav extends React.Component {
    render() {
        return(
            <div>
                <Row>
                    <div className="profile-img">
                        <Avatar 
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
                            size="large"
                        />
                    </div>
                </Row>
                <Row>
                    <div className="hor-line"></div>
                    <div className="icon-holders">
                        <Icon type="link" 
                              style={{ fontSize: 30, color: '#08c' }}/>
                    </div>
                </Row>
                <Row>
                    <div className="hor-line"></div>
                    <div className="icon-holders">
                        <Icon type="qq" 
                              style={{ fontSize: 30, color: '#08c' }}/>
                    </div>
                </Row>
                <Row>
                    <div className="hor-line"></div>
                    <div className="icon-holders">
                        <Icon type="github" 
                              style={{ fontSize: 30, color: '#08c' }}/>
                    </div>
                </Row>

                <Row>
                    <div className="hor-line"></div>
                    <div className="icon-holders">
                        <Icon type="google" 
                              style={{ fontSize: 30, color: '#08c' }}/>
                    </div>
                </Row>
                <Row>
                    <div className="hor-line"></div>
                    <div className="icon-holders">
                        <Icon type="alipay" 
                              style={{ fontSize: 30, color: '#08c' }}/>
                    </div>
                </Row>
                <Row>
                    <div className="hor-line"></div>
                    <div className="icon-holders">
                        <Icon type="yuque" 
                              style={{ fontSize: 30, color: '#08c' }}/>
                    </div>
                </Row>
                <Row>
                    <div className="hor-line"></div>
                    <div className="icon-holders">
                        <Icon type="dropbox" 
                              style={{ fontSize: 30, color: '#08c' }}/>
                    </div>
                </Row>
            </div>
        )
    }
} 

