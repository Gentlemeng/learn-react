import React from 'react'
import ReactDOM from 'react-dom'
const root = document.getElementById('root')

//受控组件:渲染表单的React组件还控制着用户输入过程中表单发生的操作。
//被react以这种方式控制取值的表单输入元素就叫做受控组件
//表单提交时，打印出名称
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }
//     handleSubmit(event) {
//         alert('提交的名字: ' + this.state.value);
//         event.preventDefault();
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     名字:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="提交" />
//             </form>
//         )
//     }
// }
// ReactDOM.render(<NameForm />, root)

//react中   textarea标签使用value属性来代替文本。

//react中   select不会使用其子元素option的selected属性来规定默认选中值，而是
//会在根元素使用value属性，并且可以将数组传递到value中，以支持select标签选择多个选项
//<select multiple={true} value={['a','b']}></select>

//处理多个输入
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    参与:
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    来宾人数:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}
ReactDOM.render(<Reservation />, root);