import React,{Component} from 'react';
import TodoList from '../todo-list/todo-list.js';
import Header from '../header/header.js';
import SearchPanel from '../search-panel/search-panel.js';
import ItemFilter from '../item-filter/item-filter.js';

import './app.css';


class App extends Component {

  state = {todoData: [
    {label: 'задача 1',important: false,id: 1},
    {label: 'задача 2',important: true,id: 2},
    {label: 'задача 3',important: false,id: 3}
  ]};
  
  render() {
    const {todoData} = this.state;
  return (
    <div className="todo-app">
        <Header />
        <SearchPanel />
        <ItemFilter />
        <TodoList todoData={todoData} />
       
    </div>
  );
  }
  
}
export default App;