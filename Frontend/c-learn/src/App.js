import './App.css';
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Loginpage from './pages/Login';

function App() {
  return (
      <div className="App" style={{padding:'0px',margin:'0px'}}>
        <Routes>
          <Route path="/*" element={<Loginpage />} /> 
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;