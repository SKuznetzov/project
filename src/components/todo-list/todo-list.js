import React,{Component} from 'react';

import './todo-list.css';
import TodoListItem from '../todo-list-item';

class TodoList extends Component{
 
  render() {
    const {todoData,onDeleted} = this.props;
  // const {label,important,id} = this.props;
  return (
    <ul className="list-group todo-list">
     {
        todoData.map((item,id)=>{
           return <TodoListItem key={id} 
                                {...item} 
                                onDeleted={()=>onDeleted(id)}>{item.label}</TodoListItem>
         })
     }
    </ul>)
  }
}
export default TodoList;