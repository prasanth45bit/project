import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Overview');
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveItem('Overview');
    } else if (path === '/Exercise') {
      setActiveItem('Exercise');
    } else if (path === '/Trynow') {
      setActiveItem('Try now');
    }
  }, [location]);

  const handleItemClick = (item, path) => {
    setActiveItem(item);
    navigate(path);
  };

  return (
    <div className="responsive-menu">
      <nav className="navbar">
        <h5
          className={activeItem === 'Overview' ? 'active' : ''}
          onClick={() => handleItemClick('Overview', '/Overview')}
        >
          Overview
        </h5>
        <h5
          className={activeItem === 'Exercise' ? 'active' : ''}
          onClick={() => handleItemClick('Exercise', '/Exercise')}
        >
          Exercise
        </h5>
        <h5
          className={activeItem === 'Try now' ? 'active' : ''}
          onClick={() => handleItemClick('Try now', '/Trynow')}
        >
          Try now
        </h5>
      </nav>
    </div>
  );
};

export default Navbar;
