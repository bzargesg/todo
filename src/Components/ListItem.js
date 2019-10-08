import React, { useState } from "react";

var ListItem = function(props) {
  return (
    <div className="lisstitem">
      <div className="list">
        {props.index}. {props.item}
      </div>
      <button className="delete button" onClick={(e)=>props.deleteTodo(props.index)}>Delete Item</button>
    </div>
  )
}
export default ListItem;