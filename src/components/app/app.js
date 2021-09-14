import React,{Component} from 'react';
import TodoList from '../todo-list';
import Header from '../header';
import SearchPanel from '../search-panel';
import ItemFilter from '../item-filter';
import FormAddItem from '../form-add-item'
import './app.css';


class App extends Component {

  state = {todoData: [
    {label: 'задача 1',important: false,id: 1},
    {label: 'задача 2',important: true,id: 2},
    {label: 'задача 3',important: false,id: 3}
  ]};
  deleteItem = (id)=>{
    this.setState(({todoData})=>{
      const idx = todoData.findIndex((el)=>el.id ===id)
      const newArr = [...todoData.slice(0,idx),...todoData.slice(idx+1)]
      return {todoData: newArr}
    });
  };
  
  render() {
    const {todoData} = this.state;
  return (
    <div className="todo-app">
        <Header />
        <SearchPanel />
        <ItemFilter />
        <TodoList todoData={todoData}
                  onDeleted={this.deleteItem} />
        <FormAddItem />
       
    </div>
  );
  }
  
}
export default App;