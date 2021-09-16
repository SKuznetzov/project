import React,{Component} from 'react';
import './search-panel.css';
class SearchPanel extends Component {
  render(){
  return (
    <div>
      <input type="text" 
             placeholder="поиск"
             className="form-control search-input" />
    </div>
  )
  }
}
export default SearchPanel;