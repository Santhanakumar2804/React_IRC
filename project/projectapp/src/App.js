import React from 'react';
import Nav from './components/Nav';
import Login from './components/Login';
import Reg from './components/reg';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
// import Home from './components/Home';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
function App(){
  return (
    <>
    <div className="App">
   
    {/* <Reg/> */}
    <Nav/>
    <Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/register' element={<Reg/>}/>
    <Route path='/' element={<SideBar/>}/>
    </Routes>
    
    <Footer/>
    {/* <Home/> 
     <Login/> */}
    </div>
    </>
  );
}
export default App;


