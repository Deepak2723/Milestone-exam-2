import React, { useState } from 'react';
import './css/Todo.css';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskInput.trim() === '') {
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      title: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const handleStatusToggle = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTodo = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button type="submit">Add</button>
      </form>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.id}. </span>
              <span className={task.completed ? 'completed' : ''}>
                {task.title}
              </span>
              <button onClick={() => handleStatusToggle(task.id)}>
                {task.completed ? 'Pending' : 'Completed'}
              </button>
              <button onClick={() => handleRemoveTodo(task.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
