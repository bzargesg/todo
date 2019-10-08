import React, { useState } from "react";
import ListItem from "./ListItem"
var List = function(props) {
  const [todos, addTodo] = useState([]);
  const [todo, todoChange] = useState('');
  const deleteTodo = (index) =>{
    let todosCopy = todos.slice(0);
    todosCopy.splice(index, 1)
    addTodo(todosCopy);
  }
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
     {todos.map((item, index)=>{
       return <ListItem key={index} item={item} index={index} deleteTodo={deleteTodo}/>
     })}
    </div>
  )
}
export default List;