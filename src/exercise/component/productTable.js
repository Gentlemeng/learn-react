import React, { Component } from 'react';
import ProductCategoryRow from "./productCategoryRow"
import ProductRow from "./productRow"
class ProductTable extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={}
    // }
    // 生命周期 只有当前后数据不一致时才渲染
    shouldComponentUpdate(nextProps,nextState){
        var newProducts = nextProps.products;
        var beforeProducts = this.props.products
        var isRender = false;

        if(newProducts.length===beforeProducts.length){
                for(var i=0;i<newProducts.length;i++){
                    if(newProducts[i].name!==beforeProducts[i].name){
                        isRender = true
                        break;
                    }
                }
        }else{
            isRender = true
        }
        return isRender  // true or false
    }
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