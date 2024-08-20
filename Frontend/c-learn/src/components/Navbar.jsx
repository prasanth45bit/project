import React, { useState, useContext } from 'react';
import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('overview');
  const navigate = useNavigate();
  const location = useLocation();
  const { user, handleLogout } = useContext(AuthContext);


  React.useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('/overview')) {
      setActiveItem('overview');
    } else if (path.includes('/exercise')) {
      setActiveItem('exercise');
    } else if (path.includes('/trynow-page')) {
      setActiveItem('trynow-page');
    }
  }, [location]);

  const handleItemClick = (item, path) => {
    setActiveItem(item);
    navigate(path);
  };

  const Click = (path) => {
    navigate(path);
  };

  
  return (
    <div className="responsive-menu">
      <div className="navbar">
        <div
          className={activeItem === 'overview' ? 'active' : ''}
          onClick={() => handleItemClick('overview', '/home')}
        >
          Overview
        </div>
        <div
          className={activeItem === 'exercise' ? 'active' : ''}
          onClick={() => handleItemClick('exercise', '/home/exercise')}
        >
          Exercise
        </div>
        <div
          className={activeItem === 'trynow-page' ? 'active' : ''}
          onClick={() => handleItemClick('trynow-page', '/home/trynow-page')}
        >
          Try now
        </div>
        <button onClick={handleLogout}>Logout</button>
        <div className='userlogo'>
          <p alt={user.name} onClick={() => Click('/home/profile')}>
            PROFILE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
