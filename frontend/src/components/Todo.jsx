import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Todo = ({ addTodo }) => {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('ongoing');

  const handleAddClick = () => {
    if (description) {
      addTodo({ description, status });
      setDescription('');
      setStatus('ongoing');
    }
  };

  return (
    <div className="todo-input">
      <TextField 
        label="Todo Description" 
        variant="outlined" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add Todo
      </Button>

      


      <Button variant="outlined" color="error" onClick={handleAddClick}>DELETE</Button>


<br/><br/>
<TextField 
        label="Todo Description" 
        variant="outlined" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      
  



      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add Todo
      </Button>
    <Button variant="outlined" color="error" onClick={handleAddClick}>DELETE</Button>
      <br/><br/>
      <TextField 
        label="Todo Description" 
        variant="outlined" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add Todo
      </Button>

      <Button variant="outlined" color="error" onClick={handleAddClick}>DELETE</Button>
      <br/><br/>
      <TextField 
        label="Todo Description" 
        variant="outlined" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add Todo
      </Button>

      <Button variant="outlined" color="error" onClick={handleAddClick}>DELETE</Button>
      <br/><br/>
      <TextField 
        label="Todo Description" 
        variant="outlined" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add Todo
      </Button>

      <Button variant="outlined" color="error" onClick={handleAddClick}>DELETE</Button>
      <br/><br/>
      <TextField 
        label="Todo Description" 
        variant="outlined" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add Todo
      </Button>

      <Button variant="outlined" color="error" onClick={handleAddClick}>DELETE</Button>

<br/><br/>
      <TextField 
        label="Todo Description" 
        variant="outlined" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add Todo
      </Button>

      <Button variant="outlined" color="error" onClick={handleAddClick}>DELETE</Button>
      <br/><br/>


      <TextField 
        label="Todo Description" 
        variant="outlined" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="ongoing">Ongoing</option>
        <option value="completed">Completed</option>
      </select>
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add Todo
      </Button>

      <Button variant="outlined" color="error" onClick={handleAddClick}>DELETE</Button>
      <br/><br/>
    </div>
  );
};

export default Todo;

