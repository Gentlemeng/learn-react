import React from 'react'
import ReactDom from 'react-dom'
const root = document.getElementById('root')

//react中，不能通过返回false的方式阻止默认行为，需显式使用preventDefault
// function ActionLink(){
//     function handleClick(e){

//         e.preventDefault(); //这里不是return false
//         console.log("The link was clicked")
//     }
//     return (
//         <a href ='#' onClick={handleClick}>
//             Click me
//         </a>
//     )
// }
// ReactDom.render(<ActionLink/>,root)

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // 为了在回调中使用 `this`，这个绑定是必不可少的
    //   this.handleClick = this.handleClick.bind(this);
    }
    //javascript中，class的方法默认不会绑定this
    // handleClick() {
    //   this.setState(state => ({
    //     isToggleOn: !state.isToggleOn
    //   }));
    // }
    //两种方式解决bing this问题
    // 1 class fields绑定回调函数 实验性语法
    handleClick=()=>{
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    
    // 2 回调中使用箭头函数  这种做法问题在于每次渲染Toggle时都会创建不同的回调函数
    //在大多数情况下，没什么问题，但是如果该回调函数作为props传入子组件时，这些组件可能会
    //进行额外的重新渲染。通常建议使用class fields语法
    // <button onClick={(e)=>this.handleClick(e)}>
    render() {
      return (
        //通常情况下，如果没有在方法后添加(),例如：onClick={this.handleClick}
        //应该为这个方法绑定this
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  ReactDom.render(
    <Toggle />,
    root
  );