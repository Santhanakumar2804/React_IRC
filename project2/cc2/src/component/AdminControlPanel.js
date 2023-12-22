// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineTool,AiOutlineLogout,AiOutlineNotification } from 'react-icons/ai';
import '../assets/AdminControlPanel.css';
const Sidebar = () => {
  return (
    // <>
    <div className="sidebar">
      
          {/* <div className='h-btn'>

          <Link to="/home">
            <AiOutlineHome /> <span>Home</span>
          </Link>
          </div>
        */}
          <div className='ad-btn'>
          <Link to="/admin-profile">
            <AiOutlineUser /> <span>Admin Profile</span>
          </Link>
          </div>
        
          <div className='u-btn'>
          <Link to="/utilities">
            <AiOutlineTool /> <span>Utilities</span>
          </Link>
          </div>
          <Link to="/notifications">
            <AiOutlineNotification /> <span>NOTIFICATIONS</span>
          </Link>
          <Link to="/logout">
            <AiOutlineLogout /> <span>LOG OUT</span>
          </Link>
        
    </div>
    /* </> */
  );
};
export default Sidebar;
