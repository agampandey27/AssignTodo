import React from 'react';
import TodoList from '../components/TodoList';
import Logout from '../components/Logout';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Todo App</h1>
      <Logout/>
      <TodoList />
    </div>
  );
};

export default Home;

