import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <div key={todo._id} className="todo-item">
          <Checkbox 
            checked={todo.status === 'completed'} 
            onChange={() => {}} 
            disabled={todo.status === 'completed'}
          />
          <span style={{ textDecoration: todo.status === 'completed' ? 'line-through' : 'none' }}>
            {todo.description}
          </span>
          <Button variant="outlined" color="secondary" onClick={() => deleteTodo(todo._id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;