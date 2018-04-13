import React, { Component } from 'react';
import { observer } from "mobx-react"
import { Input, List, Avatar } from 'antd';


import './css/secondary-nav.css';

@observer
export default class SecondarySideNav extends Component { 
    render() {

        const {data, filter, filteredData} = this.props.store;

        return(
            <div className="secondary-main">
                <div className="search-wrapper">
                    <Input
                        placeholder="input search text"
                        value={filter}
                        onChange={this.filter}
                        style={{ width: 200 }}
                    />
                </div>
                <div className="sec-content-wrapper">
                    <List
                        itemLayout="horizontal"
                        dataSource={filteredData}
                        renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                            avatar={<Avatar icon="dot-chart" />}
                            title={<a href="#">{item.title}</a>}
                            description={item.description}
                            />
                        </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }

    filter = (e) => {
        this.props.store.filter = e.target.value
    }
}