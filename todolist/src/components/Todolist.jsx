import React from "react";
import { useState } from "react";

export const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [dueDate, setDueDate] = useState(""); // Add a state for the due date

  const addTodoFun = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, dueDate }]); // Add the due date to the todo object
      setNewTodo("");
      setDueDate(""); // Reset the due date after adding the todo
    }
  };

  const removeTodoFun = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

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
        <input
          type="date"
          value={dueDate}
          onChange={(element) => setDueDate(element.target.value)}
        />
        <button onClick={addTodoFun} className="btn btn-success ms-3">
          Add
        </button>
        <ol>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text} (Due: {todo.dueDate})
              <button
                className="btn btn-danger"
                onClick={() => removeTodoFun(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};