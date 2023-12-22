// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogin, AiOutlineUser, AiOutlineDashboard } from 'react-icons/ai';
import '../assets/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link to='/home'>
          <li><AiOutlineHome className="icon" /> HOME</li>
        </Link>
        <Link to='/login'>
          <li><AiOutlineLogin className="icon" /> LOGIN</li>
        </Link>
        <Link to='/register'>
          <li><AiOutlineUser className="icon" /> REGISTER</li>
        </Link>
        <Link to='/sidebar'>
          <li><AiOutlineDashboard className="icon dashboard-icon" /></li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
