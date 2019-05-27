import React from 'react'
import ReactDOM from 'react-dom'
const root = document.getElementById('root')

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

//   FilterableProductTable
//     SearchBar
//     ProductTable
//         ProductCategoryRow
//         ProductRow
class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:''
        }
    }
    handleValueChange=(value)=>{
        this.setState({
            inputValue:value
        })

    }
    render(){
        let products = this.props.products;
        let value = this.state.inputValue;
        let filterProducts = [];
        products.filter((product)=>{
            if(product.name.indexOf(value)!=-1){
                filterProducts.push(product)
            }
            return filterProducts
        })
        return (
            <div>
                <SearchBar onhandleValueChange={this.handleValueChange}/>
                <ProductTable products={filterProducts}/>
            </div>
        )
    }
}
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        // this.state={
        //     value:''
        // }
    }
    handleChange=(event)=>{
        // this.setState({
        //     value:event.target.value
        // })
        this.props.onhandleValueChange(event.target.value)
    }
    render(){
        return (
            <form>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={this.props.value}
                    onChange={this.handleChange}
                />
                <p>
                    <input type="checkbox" />{' '}Only show products in stock
                </p>
            </form>
        )
    }
}
class ProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const rows = [];
        let lastCategory = '';
        this.props.products.forEach(product => {
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
class ProductCategoryRow extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <p>{this.props.category}</p>
        )
    }
}
class ProductRow extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let product = this.props.product
        return <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    }
}

ReactDOM.render(<FilterableProductTable products={PRODUCTS}/>,root)
   