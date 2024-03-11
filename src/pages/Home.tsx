import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Link, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Your Budget App</h2>
      <p>This is the home page of your budget app.</p>
      <p>You can manage your expenses and income using the navigation links above.</p>
      <p>Get started by clicking on one of the links.</p>
    </div>
  );
};

export default Home;