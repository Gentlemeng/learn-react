import React, { Component } from 'react';
import ProductCategoryRow from "./productCategoryRow"
import ProductRow from "./productRow"
class ProductTable extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={}
    // }
    render(){
        const rows = [];
        let lastCategory = '';
        let isStock = this.props.isStock;
        this.props.products.forEach(product => {
            if(isStock&&!product.stocked){
                return
            }
            if(lastCategory!==product.category){
                rows.push(
                    <ProductCategoryRow 
                        category={product.category}
                        key={product.category}
                    />
                )
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            )
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
        
    }
}

export default ProductTable