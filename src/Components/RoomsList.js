import React, { Component } from 'react';
import {Button} from 'antd';

import './css/room-list.css';

export default class RoomsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            current_room: ''
        }
    }

    render() {
        return(
            <div className="main-rooms-list-container">
                <div className="room-name"><Button value="RoomA" onClick={this.join}>A</Button></div>
                <div className="room-name"><Button value="RoomB" onClick={this.join}>B</Button></div>
                <div className="room-name"><Button value="RoomC" onClick={this.join}>C</Button></div>
                <div className="room-name"><Button value="RoomD" onClick={this.join}>D</Button></div>
            </div>
        )
    }

    join = (e) => {
        this.props.store.userObject.current_room = e.target.value;
    }
}