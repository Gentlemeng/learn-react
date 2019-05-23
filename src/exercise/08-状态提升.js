import React from 'react'
import ReactDOM from 'react-dom'
const root = document.getElementById('root')

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
//组件 BoilingVerdict 根据温度判断是否可以沸腾
function BoilingVerdict (props){
    if(props.celsius>=100){
        return <p>The water would boil</p>
    }
    return <p>The water would not boil</p>
}
//组件 input 
// function
//组件 Calculator 渲染一个用于输入温度的<input> 并将其值保存在this.state.temperature中
class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state={
            temperature:'',
            scale:'c'
        }
    }
    handleCelsiusChange=(temperature)=>{
        this.setState({
            temperature:temperature,
            scale:'c'
        })
    }
    handleFahrenheitChange=(temperature)=>{
        this.setState({
            temperature:temperature,
            scale:'f'
        })
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale==='c'?temperature:tryConvert(temperature,toCelsius)
        const fahrenheit = scale==='f'?temperature:tryConvert(temperature,toFahrenheit)
        return (
            <div>
                <TemperatureInput scale="c" onTemperatureChange={this.handleCelsiusChange} temperature={celsius}/>
                <TemperatureInput scale="f" onTemperatureChange={this.handleFahrenheitChange} temperature={fahrenheit}/>
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        )
    }
}
class TemperatureInput  extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.onTemperatureChange(event.target.value);
    }
    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input type="text" value={temperature} onChange={this.handleChange}/>
            </fieldset>
        )
    }
}
//转换的函数
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
ReactDOM.render(<Calculator/>,root)