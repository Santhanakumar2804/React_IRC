import React from "react";
import {Route,Routes} from 'react-router-dom';
import Homepage from "./component/Homepage";
import Login from "./component/Login";
import Nav from "./component/Navbar";
import Register from "./component/Register";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import './assets/App.css';
function App() {
  return (
    <div className="App">
   <Nav/>
   <Footer/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/sidebar" element={<Sidebar />}/>
      </Routes>
    
    </div>
  );
}
export default App;
