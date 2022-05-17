import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/NavBar';
import Admin from './components/pages/Admin';
import Home from './components/pages/Home';
import Movement from './components/pages/Movement';
import Sidebar from './components/Sidebar';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
          <div className='flex'>
            <Sidebar/>
            <div className='content'>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/movement" element={<Movement/>}/>
              </Routes>
            </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
