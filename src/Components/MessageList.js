import React from 'react';
import { List, message, Avatar, Spin, Input, Button, Modal } from 'antd';
import reqwest from 'reqwest';
import axios from 'axios';
import { observer } from 'mobx-react';

@observer
export default class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            hasMore: true,
            message: '',
            picStats: [],
            picStatModal: false
        }
        this.room = this.props.store.current_room;
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
            this.props.store.data = [...this.props.store.data, o];
        });
    }

    componentWillMount() {
        this.getMessages();
    }

    componentDidUpdate() {
        this.refs.messages.scrollTop = this.refs.messages.scrollHeight;
        if (this.room !== this.props.store.current_room) {
            this.props.store.data = [];
            this.room = this.props.store.current_room;
        }
    }

    handleInfiniteOnLoad = () => {
        let data = this.props.store.data;
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
        const img_stat = this.state.picStatModal ? (
            <Modal title="Image Analytics"
                visible={this.state.picStatModal}
                onOk={() => this.setState({picStatModal: false})}
                >
                <div>
                    <li>{this.state.picStats[0].description}</li>
                    <li>{this.state.picStats[1].description}</li>
                    <li>{this.state.picStats[2].description}</li>
                </div>
            </Modal>
        ) : null;
        return(
        <div>
            <div className="message-placeholder" ref="messages" >
                    <List
                        dataSource={this.props.store.data}
                        renderItem={item => {
                            const analyzeButton = item.img ?  (
                                <Button 
                                    onClick={this.analyzeImage}
                                    value={item.img}
                                >Analyze</Button>
                            ) : null;
                            return (
                                <div>
                                    <List.Item 
                                        key={item.id}
                                        extra={<img width={272} src={item.img} />}
                                    >
                                    <List.Item.Meta
                                        avatar={<Avatar style={{ backgroundColor: '#08c' }} icon="user" />}
                                        title={<a href="#">{item.name}</a>}
                                        description={item.message}
                                    />
                                    </List.Item>
                                    {analyzeButton}
                                </div>
                            )
                        }}
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
            <div 
                style={{ 'display': 'flex', 'justifyContent': 'center', 'padding': '5px'  }}
            >
                <Button 
                    type="primary"
                    icon="notification"
                >
                    Broadcast {this.props.store.current_room}
                </Button>
            </div>
            {img_stat}
        </div>
        )
    }

    handleSend = (e) => {
        if (e.key === 'Enter') {
            let d = {
                name: this.props.store.userObject.username,
                message: this.state.message,
                img: ""
            };

            // check if the message is a image link
            if (this.checkURL(this.state.message)) {
                d.message = ""
                d.img = this.state.message;
            }

            // check if translation enabled 
            if (this.state.message.includes("@translate") && this.props.store.userObject.translation_token ) {
                let k = this.state.message.split(" ");
                let target = k[1];
                let message = this.state.message.split(k[1] + " ").pop();
                this.getTranslatedMessage( message , target, d);
            } else {
                this.props.socket.emit('SEND_MESSAGE', d);
                this.setState({ message: '' });
            }
        }
    }

    handleMessage = (e) => { 
        this.setState({message: e.target.value});
    }


    getTranslatedMessage = (message, target, d) => {
        axios.defaults.headers.common['Authorization'] = "Bearer " + this.props.store.userObject.translation_token;
        axios.post(`https://translation.googleapis.com/language/translate/v2`,
                    {
                        "q": message,
                        "target": target
                    }
                )
                .then( (response) => {
                    d.message = response.data.data.translations[0].translatedText;
                    this.props.socket.emit('SEND_MESSAGE', d);
                    this.setState({ message: '' });
    });
    }

    checkURL = (url) => {
        return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    analyzeImage = (e) => {
        // axios.defaults.headers.common['Authorization'] = "Bearer " + this.props.store.userObject.translation_token;
        // console.log(axios.defaults.headers.common['Authorization']);
        const apiKey='AIzaSyBP5wE0btn_VBAtdvvy9gnxttfWsF6n-mw'
        axios.post(`https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
            {
                "requests": [
                {
                    "features": [
                    {
                        "type": "LABEL_DETECTION"
                    }
                    ],
                    "image": {
                    "source": {
                        "imageUri": e.target.value
                    }
                    }
                }
                ]
            }
        )
        .then((response) => {
            console.log(response.data.responses[0].labelAnnotations);
            this.setState({picStats: response.data.responses[0].labelAnnotations, picStatModal: true})
        })
    }
}