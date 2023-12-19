// Register.js

import React from 'react';
import '../assets/Register.css';
import backgroundImage from '../assets/343621.jpg';

function change() {
  alert('Registered!!');
}

function Register() {
  const containerStyle = {
    width: '300px',
    backgroundColor: '#f8f6f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  };

  const santaStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      <div style={santaStyle}>
        <form style={containerStyle} onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="" id="name" placeholder="Name" className="name-input" />
          <input type="number" name="" id="Age" placeholder="Age" className="name-input" />
          <input type="email" name="" id="Email" placeholder="Email" className="name-input" />
          <input type="password" name="" id="pass1" placeholder="Password" className="name-input" />
          <input type="password" name="" id="pass2" placeholder="Confirm Password" className="name-input" />
          <input type="submit" onClick={change} value="SUBMIT" className="button-input" />
        </form>
      </div>
    </>
  );
}

export default Register;
