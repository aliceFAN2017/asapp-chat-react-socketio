import React from 'react'
import '../../../static/styles/message/style.css'

class Message extends React.Component {
    render() {
        const isSender = this.props.author.sender === this.props.sender;
        const fromMe = isSender ? 'from-me' : '';
        const receiver = isSender ? '' : 'arrow-left';
        const sender = isSender ? 'arrow-right' : '';

        return (
            <section className='container'>
                <p className='time-center'>{ this.props.shouldShowTime ? this.props.time : '' }</p>
                <section className={ `message ${fromMe}` }>
                    <img src={ this.props.author.profile } className='profile' alt='profile'/> 
                    <section className='arrow-parent'>
                        <span className={ receiver }></span>
                        <span className='message-body'>{ this.props.message }</span>
                        <span className={ sender }></span>
                    </section>
                </section>
            </section>
        )
    }
}

export default Message