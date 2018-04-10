import React, { Component } from 'react';
import { Input, List, Avatar } from 'antd';


import './css/secondary-nav.css';

export default class SecondarySideNav extends Component { 
    render() {

        const data = [
            {
              title: 'Ant Design Title 1',
            },
            {
              title: 'Ant Design Title 2',
            },
            {
              title: 'Ant Design Title 3',
            },
            {
              title: 'Ant Design Title 4',
            },
        ];

        const Search = Input.Search;
        return(
            <div className="secondary-main">
                <div className="search-wrapper">
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                </div>
                <div className="sec-content-wrapper">
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                            avatar={<Avatar style={{ backgroundColor: '#08c' }} icon="user" />}
                            title={<a href="#">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}