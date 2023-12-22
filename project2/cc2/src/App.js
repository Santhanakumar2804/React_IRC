import React from "react";
// import {Route,Routes} from 'react-router-dom';
import Homepage from "./component/Homepage";
import Login from "./component/Login";
import Nav from "./component/Navbar";
import Register from "./component/Register";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import ProductPage from "./component/product page";
import AboutUs from "./component/AboutUs";
import './assets/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from "./component/AdminLogin";
import AdminControlPanel from "./component/AdminControlPanel";
function App() {
  return (
    <div className="App">
   <Nav/>
   <Footer/>
      <Routes>
        <Route path="/Home" element={<Homepage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/sidebar" element={<Sidebar />}/>
        <Route path="/PRODUCTS" element={<ProductPage />}/>
        <Route path="/ABOUT US" element={<AboutUs />}/>
        <Route path="/ADMIN" element={<AdminLogin/>}/>
        <Route path="/ADMINCON" element={<AdminControlPanel/>} />
      </Routes>
    </div>
  );
}
export default App;
