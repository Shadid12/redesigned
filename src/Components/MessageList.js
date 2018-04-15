import React from 'react';
import { List, message, Avatar, Spin, Input } from 'antd';
import reqwest from 'reqwest';


export default class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "john doe",
                    message: "Hey this is a message"
                },
                {
                    name: "jane stiffler",
                    message: "Hello I am here man"
                }
            ],
            loading: false,
            hasMore: true,
            message: ''
        }
    }

    getData = (callback) => {
        reqwest({
          url: 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo',
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: (res) => {
            callback(res);
          },
        });
    }

    getMessages = () => {
        this.props.socket.on('RECEIVE_MESSAGE', (o) => {
            this.setState({data: [...this.state.data, o]});
        });
    }

    componentWillMount() {
        this.getMessages();
    }

    componentDidUpdate() {
        this.refs.messages.scrollTop = this.refs.messages.scrollHeight;
    }

    handleInfiniteOnLoad = () => {
        let data = this.state.data;
        this.setState({
          loading: true,
        });
        if (data.length > 4) {
          message.warning('Infinite List loaded all');
          this.setState({
            hasMore: false,
            loading: false,
          });
          return;
        }
    }


    render() {
        // console.log(this.refs.messages);
        return(
        <div>
            <div className="message-placeholder" ref="messages" >
                    <List
                        dataSource={this.state.data}
                        renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={<Avatar style={{ backgroundColor: '#08c' }} icon="user" />}
                                title={<a href="#">{item.name}</a>}
                                description={item.message}
                            />
                        </List.Item>
                        )}
                    >
                        {this.state.loading && this.state.hasMore && <Spin className="demo-loading" />}
                    </List>
            </div>

            <div>
                <Input  placeholder="write message" 
                        onChange={this.handleMessage}
                        value={this.state.message}
                        onKeyPress={this.handleSend}
                        size="large" />
            </div>

        </div>
        )
    }

    handleSend = (e) => {
        if (e.key === 'Enter') {
            let d = {
                name: this.props.store.userObject.username,
                message: this.state.message
            };
            this.props.socket.emit('SEND_MESSAGE', d);
            this.setState({ message: '' });
        }
    }

    handleMessage = (e) => { 
        this.setState({message: e.target.value});
    }
}