import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <Routes>
        {/* Protected Route: Only accessible if the user is logged in */}
        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/login" />}
        />
        {/* Public Route: Accessible by everyone */}
        <Route
          path="/login"
          element={<LoginPage setToken={setToken} />}
        />
        {/* Redirect to login if no matching route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
