import './Home.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Overview from './Overview';
import Exercise from './Exercise';
import Trynow from './Trynow';
import Navbar from '../components/Navbar';
import Profile from '../components/profile';
import C_Home from '../Menupage/c-home';
import C_Introduction from '../Menupage/c-introduction';
import Menubar from '../components/Menubar';

function Home() {
  return (
    <div className="Home" >
      <div style={{width:'100%',height:'7%'}}><Navbar /></div>
    
      <div className="Navigate-container">
        <Routes>
          <Route path="/*" element={<Overview />} />
          <Route path="exercise/*" element={<Exercise />} />
          <Route path="trynow" element={<Trynow />} />
          {/* <Route path="profile" element={<Profile/>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default Home;
