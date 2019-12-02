import React, { Component } from 'react'
import { render } from 'react-dom'
import  ProductRow  from './ProductRow'



class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
   }
   
    handleDestroy(id) {
        this.props.onDestroy(id)
   }
   
    render() {    
        
        return(<div>
            <table className={"table table-striped"}>
                <thead className={"thead-dark"}>
                    <tr>                    
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th></th>                    
                    </tr>
                </thead>
                
            <tbody>
            {Object.keys(this.props.products).map( (product, i) => 

                this.props.products[product].name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) == -1 ? "" :
                
                <ProductRow key = {this.props.products[product].id}
                        product = {this.props.products[product]}
                        onDestroy={this.handleDestroy} />
                            
            )}
            </tbody>
            </table>
            </div>        
        )
    }
}

export default ProductTable