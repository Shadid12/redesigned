import React, { Component } from 'react';
import { Input, List, Avatar } from 'antd';


import './css/secondary-nav.css';

export default class SecondarySideNav extends Component { 
    render() {

        const data = [
            {
              title: 'Title 1',
              description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
            },
            {
              title: 'Title 2',
              description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
            },
            {
              title: 'Title 3',
              description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
            },
            {
              title: 'Title 4',
              description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
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
}