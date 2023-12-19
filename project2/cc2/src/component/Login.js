import React from 'react';
import '../assets/Login.css';
import backgroundImage from '../assets/343657.jpg';

function change() {
  alert('Login successful!!');
}

function Login() {
  const containerStyle = {
    height: '300px',
    width: '400px',
    backgroundColor: '#f8f6f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '15px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
  };

  const backStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: '500px',
    width: '100vw',
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <>
      <div style={backStyle}>
        <div style={containerStyle} className="container1">
          <center>LOGIN</center>
          <form className="container1" onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="" id="name" placeholder="USERNAME" className="name-input" />
            <input type="password" name="" id="pass" placeholder="PASSWORD" className="name-input" />
            <input type="submit" onClick={change} value="LOGIN" className="button-input" />
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
