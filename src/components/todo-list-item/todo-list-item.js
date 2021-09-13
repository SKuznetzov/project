import React from 'react';
import './todo-list-item.css';
class TodoListItem extends React.Component {

  render(){
    const {...item} = this.props;
  return (
    <div className="todo-list-item">
        {item.label}
            <button type="button"
                    className="btn btn-outline-success btn-sm">
                    <i className="fa fa-exclamation" />
            </button>
            <button type="button"
                    className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o" />
            </button>
                    
         
    </div>
  )
  }
}
export default TodoListItem;