import React, { Component } from 'react';
class ProductRow extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        let product = this.props.product
        return <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    }
}

export default ProductRow