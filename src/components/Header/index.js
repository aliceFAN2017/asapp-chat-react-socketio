import React from 'react'
import ReactDOM from 'react-dom'

import '../../static/styles/header/style.css'

class Header extends React.Component {
    render() {
        return ( 
            <header className='header'>
                <h4 className='receiver'>{ this.props.user.isTyping && this.props.user.username === this.props.from ? 'Typing...' : this.props.from }</h4>
            </header>       
        )
    }
}

export default Header