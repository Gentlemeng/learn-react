import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById('root')
// 组件：接收任意入参（props）,并返回用于描述页面展示内容的React元素
// 函数组件
function Welcome(props) {
    return <h1>{props.name}</h1>
}

//class 组件   

// class Welcome extends React.Component{
//     render(){
//         return <h1>{this.props.name}</h1>
//     }
// }


//自定义组件  组件名称必须以大写字母开头
// const element = <Welcome name='xiaoqiang'/>

// ReactDOM.render(element,root);

//组合组件
// function App(){
//     return (
//         <div>
//             <Welcome name="a"/>
//             <Welcome name="b"/>
//             <Welcome name="c"/>
//         </div>
//     )
// }
// ReactDOM.render(<App/>,root)

//提取组件
//提取前
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                     src={props.author.avatarUrl}
//                     alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

function Avatar(props) {
    return <img
        src={props.user.avatarUrl}
        alt={props.user.name}
    />
}
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}
//提取后
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}