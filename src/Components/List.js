import React, { useState } from "react";
import ListItem from "./ListItem"
var List = function(props) {
  const [todos, addTodo] = useState([]);
  const [todo, todoChange] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    let todosCopy = todos.slice(0);
    todosCopy.push(todo);
    addTodo(todosCopy);
  }
  return (
    <div className="list">
     <form onSubmit={handleSubmit}>
       <input type="text" onChange={(e) =>todoChange(e.target.value)}></input>
       <button className="submit button" type="submit">Submit</button>
     </form>
     {todos.map(item=>{
       return <ListItem item={item}/>
     })}
    </div>
  )
}
export default List;