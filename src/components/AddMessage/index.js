import React from 'react'
import Header from '../Header'

import '../../static/styles/addMessage/style.css'

class AddMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
                input: ''
        }
    }

    changeHandle = e => {
        this.setState(
            {
                input: e.target.value
            })

        this.props.checkTypingStatus();
    }
    
    submitHandle = e=> {
        e.preventDefault()
        let input = this.state.input
        if (!input.trim()) {
            return;
        }

        this.props.sendMessage(this.state.input)
        this.setState({
            input: ''
        })     
    }

    render() {
        let input

        return (
            <section>
                <form onSubmit={this.submitHandle.bind(this)} className='add-message'>
                    <input type='text' onChange={this.changeHandle.bind(this)} value={this.state.input} className='message-input'/>
                    <button type='submit' className='message-send' disabled={this.state.input === ''}>
                        Send
                    </button>
                </form>
            </section>
        )
    }
}

export default AddMessage
