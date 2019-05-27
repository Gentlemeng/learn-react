import React from 'react'
import ReactDOM from 'react-dom'
const root = document.getElementById('root')


//渲染多个组件
const numbers = [1,2,3,4,5];
const listItems = numbers.map((numbers)=><li>{numbers}</li>)
// console.log(listItems);
// ReactDOM.render(<ul>{listItems}</ul>,root)

//重构上面的组件，使他接收numbers数组作为参数并输出一个元素列表
class NumbersList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            numbers:props.numbers
        }
    }
    render(){
        const numbers = this.state.numbers;
        const listItems = numbers.map((number)=>
            //最好在map()方法中的元素设置key属性
            <li key={number.toString()}>{number}</li>
        )
        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}
// ReactDOM.render(<NumbersList numbers={numbers}/>,root)

// 数组元素中使用的key在其兄弟节点之间应该是独一无二的。然而
// 他们不需要是全局唯一的。当我们生成两个不同的数组时，可以
//使用相同的key值

function Blog(props){
    const sidebar = (
        <ul>
            {props.posts.map((post)=>
                <li key={post.id}>{post.title}</li>
            )}
        </ul>
    )

    const content = props.posts.map((post)=>
        <div  key={post.id}>
            <h3>{post.title}</h3>    
            <p>{post.content}</p>
        </div>
    )

    return (<div>
        {sidebar}
        <hr/>
        {content}
    </div>)
}
const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
// ReactDOM.render(<Blog posts={posts}/>,root);

//key会传递信息给react，但不会传递给你的组件，如果需要使用key属性的值，
// 需要使用其他属性名显式传递这个值  下面的例子，Post组件可以读出props.id,读不出props.key
const content = posts.map((post)=>{
    <Post
        key={post.id}
        id={post.id}
        title={post.title}
    />
})

