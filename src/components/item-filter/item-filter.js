import React from 'react';
import './item-filter.css';
const ItemFilter = ()=>{
  return (
    <div className="btn-group">
        <button className ="btn btn-primary">All</button>
        <button className ="btn btn-primary">Active</button>
        <button className ="btn btn-primary">Done</button>
    </div>
  );
};
export default ItemFilter;