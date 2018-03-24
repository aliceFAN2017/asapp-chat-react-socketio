import React from 'react'
import Header from '../Header';
import MessageList from '../MessageList';
import AddMessage from '../AddMessage';
import io from 'socket.io-client'

import '../../static/styles/chatApp/style.css'

class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            author: this.props.author,
            user: '',
            message: '',
            messages: [],
        }

        this.socket = io('localhost:8000')
        this.socket.on('RECEIVE_MESSAGE', function(data) {
            addReceivedMessage(data)
        })

        const addReceivedMessage = data => {
            this.setState({
                messages: [...this.state.messages, data]
            })
        }

        this.socket.on('RECEIVE_TYPING', function(data) {
            addReceivedTyping(data)
        })

        const addReceivedTyping = data => {
            this.setState({
                user: data
            })
        }
    }

    getTime = () => {
        const date = new Date();
        const h = date.getHours();
        const m = date.getMinutes();
        return h + ':' + (m < 10 ? '0' + m : m);
    }

    sendMessage = message => {
        const n = this.state.messages.length;
        const time = this.getTime();
        this.socket.emit('SEND_MESSAGE', {
            author: this.state.author,
            message: message,
            time: time,
            shouldShowTime: n === 0 || this.state.messages[n - 1].time < time
        })

        this.socket.emit('SEND_TYPING', {
            username: this.state.author.sender,
            isTyping: false
        })

        this.setState({
            message: '',
            user: ''
        })
    }

    checkTypingStatus = () => {
        this.socket.emit('SEND_TYPING', {
            username: this.state.author.sender,
            isTyping: true
        })

        this.setState({
            user: {           
                username: this.state.author.sender,
                isTyping: true
            }
        })
    }

    render() {
        return (
            <section className='chat-app'>
                <Header from={this.state.author.to} user={this.state.user} />
                <MessageList messages={this.state.messages} sender={this.props.author.sender}/>
                <AddMessage sendMessage={this.sendMessage.bind(this)} checkTypingStatus={this.checkTypingStatus.bind(this)}/>
            </section>           
        )
    }
}

export default ChatApp
