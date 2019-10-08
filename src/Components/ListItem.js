import React, { useState } from "react";

var ListItem = function(props) {
  const [finished, finishTodo] = useState(false);
  return (
    <div className="list-item">
        <span className="todo-text">{props.index}. {props.item}</span>
        <span className="todo-text">Finished:{finished ? 'T' : 'F'}</span>
        <button className="delete button" onClick={(e)=>props.deleteTodo(props.index)}>Delete</button>
        <button className="finish button" onClick={(e)=>finishTodo(!finished)}>Finish</button>
      
    </div>
  )
}
export default ListItem;