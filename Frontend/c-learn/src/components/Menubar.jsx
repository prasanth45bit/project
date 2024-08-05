import React, { useState } from 'react';
import './Menubar.css';
import { useNavigate } from 'react-router-dom';

const Menubar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  


  return (
    <div className="responsive-menu">
      
      <div
        className="menu-button"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="responsive-menu"
      >
        ☰
      </div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`} id="responsive-menu">
        <ul>
          <h2>Course Content</h2>
          <li>C Home</li>
          <li>C Introduction</li>
          <li>C Comments </li>
          <li>C Variables</li>
          <li>C Datatypes</li>
          <li>C </li>
          <li>Gallery</li>
          <li>FAQ</li>
          <li>Testimonials</li>
          <li>Portfolio</li>
          <li>Home</li>
          <li>Collection</li>
          <li>About</li>
          <li >Contact</li>
          <li >Services</li>
          <li >Blog</li>
          <li >Gallery</li>
          <li >FAQ</li>
          <li >Testimonials</li>
          <li >Portfolio</li>
        </ul>
      </nav>
    </div>
  );
};

export default Menubar;
