import React from 'react';
import { Routes,Route} from 'react-router-dom'
import Users from './pages/Users';
import Adduser from './pages/Adduser';
import Edituser from './pages/Edituser';
function App() {
  return (
    <>
    <div className="App">
    <Routes>
    <Route path='/' element={<Users/>}/>
    <Route path='/add' element={<Adduser/>}/>
    <Route path='/edit' element={<Edituser/>}/>
    
      </Routes>      
    </div>
    </>
  );
}

export default App;
