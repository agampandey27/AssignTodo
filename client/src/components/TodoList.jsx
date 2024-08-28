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
        const response = await axios.get('https://assign-todo-six.vercel.app/api/todos', {
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
        'https://assign-todo-six.vercel.app/api/todos',
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
      await axios.delete(`https://assign-todo-six.vercel.app/api/todos/${id}`, {
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
        `https://assign-todo-six.vercel.app/api/todos/${id}`,
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
    <div className="container mx-auto p-4 max-w-lg">
      <h2 className="text-2xl mb-4 text-center">Your Todo List</h2>
      <AddTodo addTodo={addTodo} />
      <div className="mt-4 space-y-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
