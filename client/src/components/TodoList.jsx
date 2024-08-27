import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/todos', {
          headers: { 'x-auth-token': token },
        });
        setTodos(response.data);
      } catch (error) {
        console.error('Failed to fetch todos', error);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/todos',
        { text },
        { headers: { 'x-auth-token': token } }
      );
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Failed to add todo', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/todos/${id}`, {
        headers: { 'x-auth-token': token },
      });
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete todo', error);
    }
  };

  const toggleCompletion = async (id, completed) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:5000/api/todos/${id}`,
        { completed },
        { headers: { 'x-auth-token': token } }
      );
      setTodos(
        todos.map((todo) => (todo._id === id ? response.data : todo))
      );
    } catch (error) {
      console.error('Failed to update todo', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Your Todo List</h2>
      <AddTodo addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </div>
  );
};

export default TodoList;
