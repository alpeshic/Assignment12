import React, { Component } from 'react'
import { render } from 'react-dom'

const RESET_VALUES = {id: '', category: '', price: '', name: ''}
class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
       }       
   }
   
    handleSave(e) {
        this.props.onSave(this.state.product)
        this.setState({
             product: Object.assign({}, RESET_VALUES), errors: {}
        })
        e.preventDefault(); //Prevent form from triggering HTTP POST
   }
   handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
        })
    }

    render() {
        return (
            <form>
                <h4>Add a new product</h4>
                <label>Name</label><br />
                <input type="text" name="name" onChange={this.handleChange} value={this.state.product.name} /><br /><br />
                <label>Category</label><br />
                <input type="text" name="category" onChange={this.handleChange} value={this.state.product.category} /><br /><br />
                <label>Price</label><br />
                <input type="text" name="price" step = "any" onChange={this.handleChange} value={this.state.product.price}/><br /><br />
                <button type={"button"} className={"btn btn-info"} onClick={this.handleSave}>Save</button>
            </form>
        )
    }
}

// render(
//     <ProductForm />, 
//     document.getElementById('root'))

export default ProductForm