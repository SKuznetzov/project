import React from 'react';
import './todo-list-item.css';
const TodoListItem = ({...item})=>{

  
  return (
    <div className="todo-list-item">
        {item.label}
            <button >X</button>
            <button >!</button>
    </div>
  )
   
}
export default TodoListItem;