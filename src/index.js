// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import './exercise/01-更新已渲染元素.js'
// import './exercise/02-组件'
// import './exercise/03-State&生命周期'
// import './exercise/04-事件处理'
// import './exercise/05-条件渲染'
// import './exercise/06-列表&Key'
// import './exercise/07-表单'
// import './exercise/08-状态提升'
// import './exercise/09-组合vs继承'
import './exercise/10-React哲学'

// // class Square extends React.Component {
// //     // constructor(props){
// //     //     super(props);
// //     //     this.state={
// //     //         value:null
// //     //     }
// //     // }
// //     render() {
// //         return (
// //             // 数据通过props传递，从父组件流向子组件
// //             <button 
// //                 className="square" 
// //                 onClick={()=>this.props.onClick()}
// //                 // ()=>{this.setState({value:'X'})}
// //             >
// //                 {this.props.value}
// //             </button>
// //         );
// //     }
// // }
// //改写Square组件为函数组件
// function Square(props){
//     return (
//         <button className="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }

// class Board extends React.Component {
//     renderSquare(i) {
//         return (
//             <Square 
//                 value={this.props.squares[i]}
//                 onClick={()=>this.props.onClick(i)} 
//             />
//         )
//     }
//     render() {
//         return (
//             <div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }

// class Game extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             gridLen:document.querySelectorAll('.square').length,
//             history:[{
//                 squares:Array(9).fill(null),
//                 row:'',
//                 column:''
//             }],
//             xIsNext:true,
//             stepNumber:0,   //代表当前正在查看哪一项历史记录
//         }
//     }
//     hanleClick(i){
//         // const history = this.state.history;
//         const history = this.state.history.slice(0,this.state.stepNumber + 1); //截取到当前点击的历史记录索引，而不能是全部的history了。
//         const current = history[history.length-1]
//         const squares = current.squares.slice();//做时间旅行
//         if(calculateWinner(squares)||squares[i]){
//             return 
//         }
//         //计算几行几列
//         let row = Math.floor(i/3)+1;
//         let cloumn = i%3+1;
//         squares[i] = this.state.xIsNext?'X':"O"
//         // this.setState({squares:squares,xIsNext:!this.state.xIsNext})
//         this.setState({
//             history:history.concat([{
//                 squares:squares,
//                 row:row,
//                 cloumn:cloumn
//             }]),
//             stepNumber:history.length,  //每落下一颗棋子，更新stepNumber
//             xIsNext:!this.state.xIsNext
//         })
//     }
//     //更新状态stepNumber,并且当stepNumber是偶数时，xIsNext应为true
//     jumpTo(step){
//         this.setState({
//             stepNumber:step,
//             xIsNext:(step % 2) === 0
//         })
//     }
//     render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];
//         const winner = calculateWinner(current.squares);

//         const moves = history.map((step,move)=>{
//             const desc = move?'Go to move #' + move:'Go to game start';
//             return (
//                 <li key={move}>
//                     <button onClick={()=>this.jumpTo(move)}>{desc}({step.row},{step.cloumn})</button>
//                 </li>
//             );
//         });

//         let status;
//         //处理游戏状态显示信息
//         if(winner){
//             status = 'Winner' + winner;
//         }else{
//             // console.log(history.length);

//             // if(10===history.length){
//             //     status = '游戏结束，平局'
//             // }else{
//                 status = 'Next player:'+(this.state.xIsNext?'X':'O');
//             // }
//         }

//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board
//                         squares={current.squares}
//                         onClick={(i)=>this.hanleClick(i)}
//                     />
//                 </div>
//                 <div className="game-info">
//                     <div>{status}</div>
//                     <ol>{moves}</ol>
//                 </div>
//             </div>
//         );
//     }
// }
// function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
//   }

// // ========================================

// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );