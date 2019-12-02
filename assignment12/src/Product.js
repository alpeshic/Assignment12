import React, {Component} from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import  Filters  from './Filters'
import  ProductTable  from './ProductTable'
import  ProductForm  from './ProductForm'


let PRODUCTS = {
    '1': {id: 1, category: 'Games', price: '$49.99', name: 'Sudoku'},
    '2': {id: 2, category: 'Games', price: '$20.00', name: 'Monopoly'},
    '3': {id: 3, category: 'Games', price: '$45.00', name: 'Paw Patrol Lego'},
    '4': {id: 4, category: 'Books', price: '$29.50', name: 'Fetch-22'},
    '5': {id: 5, category: 'Books', price: '$15.99', name: 'The Serious Goose'},
    '6': {id: 6, category: 'Books', price: '$10.00', name: 'The Cool Bean'}
 }
 
class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText : "",
            products : PRODUCTS
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
    }
    handleFilter(filterInput){
        this.setState(filterInput)
    }
    handleSave(product) {
        if (!product.id) {
             product.id = new Date().getTime()
        }
        this.setState((prevState) => {
             let products = prevState.products
             products[product.id] = product
             return { products }
        });
   }
   handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.products
            delete products[productId]
            return { products }
        })
    }

    render () {
        return (
            <div style={{marginLeft:20, "max-width":"500px"}}>
                <h2>My Inventory</h2>
                <Filters onFilter = {this.handleFilter}/>
                <ProductTable filterText = {this.state.filterText} products={this.state.products} onDestroy={this.handleDestroy} />
                <ProductForm onSave={this.handleSave}/>
            </div>
        )      
    }


}

export default Product