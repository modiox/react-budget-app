import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <App /> {/* Render App component outside of Routes */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
