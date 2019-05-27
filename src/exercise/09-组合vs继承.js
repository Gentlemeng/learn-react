import React from 'react'
import ReactDOM from 'react-dom'
const root = document.getElementById('root')

//使用组合而非继承来实现组件间的代码重用

//包含关系
//有些组件无法提前知晓他们子组件的具体内容，建议使用一个特殊的children props
//将他们的子组件传递到渲染结果中
function FancyBorder(props){
    return (<div className={'FancyBorder FancyBorder-'+props.color}>
        {props.children}
    </div>)
}
function WelcomeDialog(){
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">Welcome</h1>
            <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
        </FancyBorder>
    )
}
ReactDOM.render(<WelcomeDialog/>,root)

//组件可以接受任意props,包括基本数据类型，react元素以及函数
