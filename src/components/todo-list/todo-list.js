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
        todoData.map((item)=>{
          const {id,...itemProps} = item;
           return <TodoListItem key={id} 
                                {...itemProps} 
                                onDeleted={()=>onDeleted(id)}>{item}</TodoListItem>
         })
     }
    </ul>)
  }
}
export default TodoList;