import React,{Component} from 'react';

import './todo-list.css';
import TodoListItem from '../todo-list-item/todo-list-item';

class TodoList extends Component{
 
  render() {
  // const {label,important,id} = this.props;
  return (
    <ul className="list-group todo-list">
     {
        this.props.todoData.map((item,id)=>{
           return <TodoListItem key={id} {...item} >{item.label}</TodoListItem>
         })
     }
    </ul>)
  }
}
export default TodoList;