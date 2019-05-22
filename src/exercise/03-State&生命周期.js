import React from 'react'
import ReactDom from 'react-dom'
const root = document.getElementById('root')

// function Clock(props){
//     return (
//         <div>
//             <h1>hello,world</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     )
// }

// function tick(){
//     const clock = <Clock date={new Date()}/>;
//     ReactDom.render(clock,root)
// }

// setInterval(tick, 1000);

//添加state，来实现这个功能(需要将函数组件转为class组件)
// function Clock(props){
//     return (
//         <div>
//             <h1>hello,world</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     )
// }
// 通过五步将两者转换
    //1,创建一个同名的ES6 class,并且继承与React.Component.
    //2,添加一个空的render()方法
    //3,将函数体移到render()方法中
    //4,在render()方法中使用this.props替换props
    //5,删除剩余的空函数声明
// class Clock extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>hello,world</h1>
//                 <h2>It is {this.props.date.toLocaleTimeString()}</h2>
//             </div>
//         )
        
//     }       
// }

// function tick(){
//     const clock = <Clock date={new Date()}/>;
//     ReactDom.render(clock,root)
// }

// setInterval(tick, 1000);

//添加局部的state
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date()
        }
    }
    //Clock组件被渲染到DOM中后运行
    componentDidMount(){
        this.timeId =setInterval(()=>{
            this.tick()
        },1000)
    }
    // 
    componentWillUnmount(){
        clearInterval(this.timeId)
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    render(){
        return (
            <div>
                <h1>hello,world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
function tick(){
    ReactDom.render(<Clock />,root)
}

setInterval(tick, 1000);