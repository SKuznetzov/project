import React from 'react';
import './todo-list-item.css';
class TodoListItem extends React.Component {

  state = {
    done: false,
    important: false
  };

  onLabelClick = ()=>{
    this.setState(({done})=>{
      return {
      done: !done
      }
    });
  };
  // можно преобразить как для done
  onImportant = ()=>{
    this.setState((state)=>{
      return {
      important: !state.important
      };
    });
  };

  render(){
    const {label,onDeleted } = this.props;
    const {done,important} = this.state;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }
    if (important) {
      classNames += ' important'
    }
  return (
    <span className={classNames}>
        <span
            className="todo-list-item-label"
            onClick={this.onLabelClick}>
            {label}
        </span>
            <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick={this.onImportant}>
                    <i className="fa fa-exclamation" />
            </button>
            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
            </button>
                    
         
    </span>
  )
  }
}
export default TodoListItem;