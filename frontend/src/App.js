import './App.css';
import React from 'react';
import Navbar from './components/Navbar.js';
import Register from './components/Register.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js'
import Homepage from './components/Homepage.js'
import Report from './components/Report.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Coming from './components/Coming.js'
function App()  {
  
  return (
   <>
   
   <Router>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/navbar' element={<Navbar/>}/>
    <Route path='/homepage' element={<Homepage/>}/>
    <Route path='/report' element={<Report/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/coming-soon' element={<Coming/>}/>
    
   </Routes>
   </Router>
   </>
  );
}


export default App;
