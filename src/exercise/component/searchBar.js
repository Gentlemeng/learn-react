import React, { Component } from 'react';
class SearchBar extends Component{
    // constructor(props){
    //     super(props);
    // }
    handleChange=(event)=>{
        this.props.onhandleValueChange(event.target.value)
    }
    handleStockChange=(event)=>{
        this.props.onhandleStockChange(event.target.checked);
    }
    render(){
        let isStock = this.props.isStock;
        let value = this.props.value;
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={value}
                    onChange={this.handleChange}
                />
                <p>
                    <input type="checkbox" checked={isStock} onChange={this.handleStockChange}/>{' '}Only show products in stock
                </p>
            </form>
        )
    }
}

export default SearchBar