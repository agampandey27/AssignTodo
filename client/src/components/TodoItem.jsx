import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleCompletion }) => {
  return (
    <div className="flex items-center mb-2 p-2 border-b border-gray-200">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleCompletion(todo._id, !todo.completed)}
        className="mr-2"
      />
      <p className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>{todo.text}</p>
      <button
        onClick={() => deleteTodo(todo._id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;



