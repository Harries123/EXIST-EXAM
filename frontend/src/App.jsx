import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await fetch('/api/todos');
      const data = await response.json();
      setTodos(data);
    };
    
    fetchData();
  }, []);

  const addTodo = async (todo) => {
 
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = async (id) => {
    
    await fetch(`/api/todos/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <Todo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;








