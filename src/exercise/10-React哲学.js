import React from 'react'
import SearchBar from "./component/searchBar"
import ProductTable from "./component/productTable"

//   FilterableProductTable
//     SearchBar
//     ProductTable
//         ProductCategoryRow
//         ProductRow
class FilterableProductTable extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            isStock:false
        }
    }
    handleValueChange=(value)=>{
        this.setState({
            inputValue:value
        })
    }
    handleStockChange=(isStock)=>{
        this.setState({
            isStock:isStock
        })
    }
    render(){
        let products = this.props.products;

        let value = this.state.inputValue;
        let isStock = this.state.isStock;
        let filterProducts = [];
        products.filter((product)=>{
            if(product.name.indexOf(value)!==-1){
                filterProducts.push(product)
            }
            return filterProducts
        })
        return (
            <div>
                <SearchBar 
                    onhandleValueChange={this.handleValueChange} 
                    onhandleStockChange={this.handleStockChange} 
                    isStock={isStock}
                    value={value}
                />
                <ProductTable products={filterProducts} isStock={isStock}/>
            </div>
        )
    }
}





export default FilterableProductTable


   