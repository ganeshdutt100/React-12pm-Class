import React from "react";
import { useState } from "react";

export const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addtodoFun = () => {
    if(newTodo.trim()){
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }
   
  };
 
  const removetodoFun = (kuchnaam) => {
      const newTodos = [...todos];
      newTodos.splice(kuchnaam,1)
      setTodos(newTodos)
  }

  return (
    <div>
      <div className="text-center">
        <h1>To do list </h1>
        <input
          type="text"
          value={newTodo}
          onChange={(element) => setNewTodo(element.target.value)}
          placeholder="Enter your tasks..."
        />
        <button onClick={addtodoFun} className="btn btn-success ms-3">
          Add{" "}
        </button>

        <ol>

      { todos.map((todo,index) => (
        <li key={index}>{todo}

        <button className="btn btn-danger" onClick={ () =>removetodoFun(index) }>Delete</button>
        {/* <button onClick={removetodoFun(index)}>Delete</button> */}

        {/* <i onClick={removetodoFun} className="fa-solid fa-trash" style={{color:'red'}} /> */}

        </li> 
        ))}
          
        </ol>
      </div>
    </div>
  );
};
