import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<LoginPage setToken={setToken} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
