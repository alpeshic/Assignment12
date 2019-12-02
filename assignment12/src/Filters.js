import React, { Component } from 'react'
import { render } from 'react-dom'

class Filters extends Component {
    constructor(props) {
        super(props)       
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const value = e.target.value
        const name = e.target.name
        this.props.onFilter({
            [name]: value
        })
    }
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." name="filterText" onChange={this.handleChange} /><br />
                <br />
            </form>
        )
    }
}

export default Filters