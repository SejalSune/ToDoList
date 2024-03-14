import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./todolist.css";

function Todo() {
  const [todos, setTodos] = useState([{ task: "Code", id: uuidv4(), isDone: false }]);
  const [todolist, setTodolist] = useState("");

  const addNewTask = () => {
    setTodos(prevTodos => [...prevTodos, { task: todolist, id: uuidv4(), isDone: false }]);
    setTodolist("");
  }

  const updateInput = (event) => {
    setTodolist(event.target.value);
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const markAsDone = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: true,
        };
      } else {
        return todo;
      }
    }));
  }
  
  return (
    <div className="todo-container">
      <input type="text" onChange={updateInput} value={todolist} placeholder="Enter a task" />
      <button className="add-task-btn" onClick={addNewTask}>Add Task</button>
      <h3>------To Do List------</h3>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className={`todo-item ${todo.isDone ? 'done' : ''}`}>
            <span>{todo.task}</span>
            <div className="action-buttons">
              <button className="mark-done-btn" onClick={() => markAsDone(todo.id)}>Mark as done</button>
              <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
