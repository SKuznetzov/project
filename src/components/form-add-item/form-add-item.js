import React, { Component } from 'react'
import './form-add-item.css';

export default class FormAddItem extends Component {

    state = {label:''}
  onLabelChange = (e)=>{
      this.setState({
          label: e.target.value
      })
  }
  onSubmit=(e)=>{
      e.preventDefault()
      this.props.onItemAdd(this.state.label)
      this.setState({
          label: ''
      })
  }
    render() {
        return (
            <form className="form-add-item d-flex" onSubmit={this.onSubmit}>
                <input type="text" 
                       placeholder="поставить задачу" 
                       className="form-control d-flex"
                       onChange={this.onLabelChange} 
                       value={this.state.label} />
                <button className="btn btn-outline-secondary">Add Item</button>
            </form>
        )
    }
}
