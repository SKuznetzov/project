import React, { Component } from 'react'
import './form-add-item.css';
export default class FormAddItem extends Component {
    render() {
        return (
            <div className="form-add-item">
                <input type="text" placeholder="поставить задачу" />
                <button className="btn btn-outline-secondary"
                onClick={()=>this.props.onItemAdd('hello')}>Add Item</button>
            </div>
        )
    }
}
