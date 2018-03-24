import React from 'react'
import ChatApp from '../ChatApp';

import '../../static/styles/app/style.css'
import laura from '../../static/images/girl.jpg'
import bob from '../../static/images/bike.jpg'

const App = () => (
    <section className='app'>
         <section>
            <ChatApp author={{ sender: 'Laura', profile: laura, to: 'Bob' }} />
        </section>
        <section>
            <ChatApp author={{ sender: 'Bob', profile: bob, to: 'Laura' }} />
        </section> 
    </section>
)

export default App
