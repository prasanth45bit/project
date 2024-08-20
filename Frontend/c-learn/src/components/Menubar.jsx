import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [level, setLevel] = useState();
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const storedLevel = localStorage.getItem('level');
    if (storedLevel) {
      setLevel(parseInt(storedLevel, 10));
    }

    axios.get('http://localhost:8081/menu')
      .then(response => setMenuItems(response.data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  const toggleMenu = (index, menu_content_path, isNavigable, hasOptions) => {
    if (isNavigable) {
      if (activeIndex === index) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }

      if (!hasOptions) {
        navigate(menu_content_path);
      }
    }
  };

  const handleNavigation = (path, isNavigable) => {
    if (isNavigable) {
      console.log(`Navigating to: ${path}`);
      navigate(path);
    }
  };

  const numberOfCheckedItems = level ? Math.min(level, menuItems.length) : 0;

  return (
    <div className="responsive-menu">
      <div>
        <h2>Course Content</h2>
        {user && <h2 className="profile-name">{user.name} - Level: {level}</h2>}
        {menuItems.map((item, index) => {
          const isUnlocked = index < numberOfCheckedItems;
          const isNavigable = isUnlocked || index === numberOfCheckedItems;
          const hasOptions = item.options && item.options.length > 0;

          return (
            <div key={item.menu_content_id}>
              <div
                onClick={() => toggleMenu(index, item.menu_content_path, isNavigable, hasOptions)}
                style={{
                  cursor: isNavigable ? 'pointer' : 'not-allowed',
                  padding: '10px',
                  color: isNavigable ? 'black' : 'grey',
                }}
              >
                <input
                  type="checkbox"
                  checked={isUnlocked}
                  readOnly
                  style={{ marginRight: '10px' }}
                />
                {item.menu_content_name}
              </div>
              {activeIndex === index && hasOptions && (
                <div className='menu-bar' style={{ backgroundColor: '#f9f9f9' }}>
                  {item.options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      style={{
                        padding: '5px 0',
                        cursor: isNavigable ? 'pointer' : 'not-allowed',
                        color: isNavigable ? 'black' : 'grey'
                      }}
                      onClick={() => handleNavigation(option.path, isNavigable)}
                    >
                      {option.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menubar;
