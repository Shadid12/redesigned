import React from 'react';
import { Row, Col, Icon, Avatar } from 'antd';
import { observer } from "mobx-react"

import './css/main-side-nav.css';

@observer
export default class MainSideNav extends React.Component {
    render() {
        let img = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        if (this.props.store.userObject.img) {
            img = this.props.store.userObject.img;
        }
        return(
            <div className="main-side-wrapper">
                <Row>
                    <div className="profile-img">
                        <Avatar 
                            src={img}
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

