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
  ],term};

  createTodoItem(label){
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
  toggleProperty(arr,id,propName){
    const idx = arr.findIndex((el)=>el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem,[propName]: !oldItem[propName]};
    return [
      ...arr.slice(0,idx),newItem,...arr.slice(idx+1)
    ];
  
  }
  onToggleImportant = (id)=>{
    this.setState(({todoData})=>{
      return {
        todoData: this.toggleProperty(todoData,id,'important')
      };
    });
  }
  onToggleDone = (id)=>{
    this.setState(({todoData})=>{
      return {
        todoData: this.toggleProperty(todoData,id,'done')
      };
    });
  };
  onSearchChange = (term)=>{
    this.setState({term});
  };
  search(items,term){
    if (term.length === 0){
      return items 
    }
      return items.filter((item)=>{
        return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
      });
    }
  render() {
    const {todoData,term} = this.state;
    const doneCount = todoData.filter((el)=>el.done).length;
    const todoCount = todoData.length - doneCount;
    const visibleItems = this.search(todoData,term);
  return (
    <div className="todo-app">
        <Header todo={todoCount} done= {doneCount} />
        <SearchPanel onSearchChange={this.onSearchChange} />
        <ItemFilter />
        <TodoList todoData={visibleItems}
                  onDeleted={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleDone={this.onToggleDone} />
        <FormAddItem onItemAdd={this.addItem} />
       
    </div>
  );
  }
  
}
export default App;