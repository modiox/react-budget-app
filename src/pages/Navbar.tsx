import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
     <a> <Link to="/">Home</Link></a> 
    <a> <Link to="/budget-app"> Calculate Your Budget</Link></a>  
    <a> <Link to="/about"> About</Link></a>  
    <a> <Link to="/contact"> Contact Us </Link></a>  
    </nav>
  );
};

export default Navbar;
