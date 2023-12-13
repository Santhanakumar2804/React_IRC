import {Link} from "react-router-dom";
import React from 'react';
import Home from "./Home";
import './Nav.css';
const Nav = () => {
  return(
    <nav className="navbar">
      
        <h1></h1>
      <ul>
        <li>
          <Link to='/Home' className="nav-link">
          HOME
          </Link>
       </li>
        <li>
          <Link to='/Login' className="nav-link">
          LOG IN
          </Link>
       </li>
        <li>
          <Link to='/register' className="nav-link">
          SIGNIN
          </Link>
       </li>
        <li>
          <Link to='/' className="nav-link">
          DASHBOARD
          </Link>
       </li>
      </ul>
     
    </nav>
  )
 }

export default Nav;