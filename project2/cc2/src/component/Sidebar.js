import React from 'react';
import '../assets/Sidebar.css';
import Image from '../assets/343549.jpg';

const Sidebar = () => {
  const sidebarStyle = {
    height: '33rem',
    width: '250px',
    backgroundColor: '#12071c',
    paddingTop: '20px',
    fontSize: '1.3rem',
    color: '#ab1212',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    zIndex: -1,
  };

  const navLinkStyle = {
    display: 'block',
    padding: '10px 20px',
    textDecoration: 'none',
    color: '#55ccea',
    transition: 'background 0.3s ease',
  };

  return (
    <div style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='bimgage'>
      <div className='backg'>
        <div style={sidebarStyle} className="sidebar">
          <header className="sidebar-header">
            <h1>#PRO SPORTS EMPORIUM</h1>
          </header>
          <nav className="nav">
            <a style={navLinkStyle} href="/">
              HOME
            </a>
            <a style={navLinkStyle} href="/products">
              PRODUCTS
            </a>
            <a style={navLinkStyle} href="/orders">
              ORDERS
            </a>
            <a style={navLinkStyle} href="/settings">
              SETTINGS
            </a>
            <a style={navLinkStyle} href="/customers">
              LOG OUT
            </a>
          </nav>
          <h2>WELCOME USER!!</h2>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
