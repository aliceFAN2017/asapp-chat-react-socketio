import React from 'react'
import Message from './Message'

import '../../static/styles/messageList/style.css'

class MessageList extends React.Component {
    componentDidUpdate() {
        const objContainer = document.getElementById('container')
        objContainer.scrollTop = objContainer.scrollHeight;
    }

    render() {
        return (
            <section id='container'>
                {this.props.messages.map((message, i) => (
                    <Message
                        key={i}
                        {...message}
                        sender={this.props.sender}
                    />
                ))} 
            </section>    
        )    
    }
}

export default MessageList