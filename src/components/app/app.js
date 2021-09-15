import React,{Component} from 'react';
import TodoList from '../todo-list';
import Header from '../header';
import SearchPanel from '../search-panel';
import ItemFilter from '../item-filter';
import FormAddItem from '../form-add-item'
import './app.css';


class App extends Component {

  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem('задание 1'),
      this.createTodoItem('задание 2'),
      this.createTodoItem('задание 3')
  ]};

  createTodoItem = (label)=>{
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  deleteItem = (id)=>{
    this.setState(({todoData})=>{
      const idx = todoData.findIndex((el)=>el.id ===id)
      const newArr = [...todoData.slice(0,idx),...todoData.slice(idx+1)]
      return {todoData: newArr}
    });
  };
  
  addItem = (text)=>{
    const newItem = this.createTodoItem(text);
    this.setState(({todoData})=>{
      const newArr = [...todoData,newItem];
      return {todoData:newArr}
    });
  };

  onToggleImportant = (id)=>{
    console.log('important',id)
  }
  onToggleDone = (id)=>{
    console.log('Done',id)
  }
  render() {
    const {todoData} = this.state;
  return (
    <div className="todo-app">
        <Header />
        <SearchPanel />
        <ItemFilter />
        <TodoList todoData={todoData}
                  onDeleted={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone} />
        <FormAddItem onItemAdd={this.addItem}/>
       
    </div>
  );
  }
  
}
export default App;