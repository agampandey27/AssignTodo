import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Todo App</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/home" className="text-white hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/profile" className="text-white hover:text-gray-200">
              Profile
            </a>
          </li>
          <li>
            <a href="/logout" className="text-white hover:text-gray-200">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
