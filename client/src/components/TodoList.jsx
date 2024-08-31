import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import Loader from './Loader';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [actionLoading, setActionLoading] = useState(false); 

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true); 
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://assign-todo-six.vercel.app/api/todos', {
          headers: { 'x-auth-token': token },
        });
        setTodos(response.data);
      } catch (error) {
        console.error('Failed to fetch todos', error);
      } finally {
        setLoading(false); 
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    setActionLoading(true);
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
    } finally {
      setActionLoading(false); 
    }
  };

  const deleteTodo = async (id) => {
    setActionLoading(true); 
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://assign-todo-six.vercel.app/api/todos/${id}`, {
        headers: { 'x-auth-token': token },
      });
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete todo', error);
    } finally {
      setActionLoading(false); 
    }
  };

  const toggleCompletion = async (id, completed) => {
    setActionLoading(true); 
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
    } finally {
      setActionLoading(false); 
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h2 className="text-2xl mb-4 text-center">Your Todo List</h2>
      <AddTodo addTodo={addTodo} disabled={actionLoading} /> 
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4 space-y-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo._id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleCompletion={toggleCompletion}
              disabled={actionLoading} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
