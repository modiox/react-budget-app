import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget-app" element={<App/>}> </Route> 
        <Route path="/about" element={<About />}> </Route> 
        <Route path="/contact" element={<Contact />}> </Route> 
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
