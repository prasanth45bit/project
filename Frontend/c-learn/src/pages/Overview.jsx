import React from "react";
import Menubar from "../components/Menubar";
import './Overview.css';
import C_Home from '../Menupage/c-home';
import { Route, Routes } from 'react-router-dom';
import C_Introduction from "../Menupage/c-introduction";
import C_Syntax from "../Menupage/c-syntax";
import C_Output from "../Menupage/c-output";

const Overview = () => {
  return (
    <div className="Overview-screen">
      <div className="Menu-screen">
        <Menubar />    
      </div>
      <div className="Home-screen">
        <Routes>
          <Route path="/" element={<C_Home />} />
          <Route path="/c-home" element={<C_Home />} />
          <Route path="c-introduction" element={<C_Introduction/>}/>
          <Route path="c-syntax" element={<C_Syntax/>}/>
          <Route path="c-output" element={<C_Output/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Overview;
