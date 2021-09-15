import React from 'react';
import './header.css';
const Header = ({todo,done})=>{
  return (
    <div className="header d-flex">
      <h1>My Todo</h1>
      <h2>{todo} Наши задачи, {done} Выполненые</h2>
    </div>
  )
}
export default Header;