import React, { Component } from 'react'


class ProductRow extends Component {
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
   }

   destroy() {
       console.log(this.props)
        this.props.onDestroy(this.props.product.id);
    }

    render() {
        return(
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.category}</td>
                <td>{this.props.product.price}</td>
                <td><button type={"button"} className={"btn btn-info"} onClick={this.destroy}>Delete</button></td>
            </tr>

        )
    }
}

export default ProductRow