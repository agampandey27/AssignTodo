import React from 'react';
import TodoList from '../components/TodoList';
import Logout from '../components/Logout';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdc57b]">
      <header className="w-full py-4 bg-[#fdf2d5] shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#212121]">
            Todo App
          </h1>
          <Logout />
        </div>
      </header>
      
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4 md:px-0">
        <div className="w-full max-w-lg md:max-w-2xl p-6 md:p-8 bg-[#fdf2d5] rounded-lg shadow-lg mt-6 md:mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 md:mb-6">
            Your Tasks
          </h2>
          <TodoList />
        </div>
      </main>

      <Footer className="mt-auto w-full bg-gray-800 text-white py-4 text-center"/>
    </div>
  );
};

export default Home;
