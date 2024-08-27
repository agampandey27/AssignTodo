import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
  <input
    type="text"
    placeholder="Add a new todo"
    value={text}
    onChange={(e) => setText(e.target.value)}
    className="flex-grow p-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button
    type="submit"
    className="w-full sm:w-auto px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    Add
  </button>
</form>

  );
};

export default AddTodo;
