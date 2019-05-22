import React from 'react';
import ReactDOM from 'react-dom';

function tick(){
    const element = (
        <div>
            <h1>hello,world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    ReactDOM.render(element,document.getElementById('root'))
}
//react 只更新它需要更新的部分
setInterval(tick,1000)