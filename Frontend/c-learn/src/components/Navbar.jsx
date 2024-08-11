import React, { useState, useContext } from 'react';
import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('overview');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('/overview')) {
      setActiveItem('overview');
    } else if (path.includes('/exercise')) {
      setActiveItem('exercise');
    } else if (path.includes('/trynow')) {
      setActiveItem('trynow');
    }
  }, [location]);

  const handleItemClick = (item, path) => {
    setActiveItem(item);
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
          className={activeItem === 'trynow' ? 'active' : ''}
          onClick={() => handleItemClick('trynow', '/home/trynow')}
        >
          Try now
        </div>
        {/* <div className='userlogo'>
        {user ? ( 
          <p alt={user.name} onClick={() => navigate('profile')}>
            PROFILE
          </p>
        ) : (''
        )}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
