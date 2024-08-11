import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './Menubar.css';

const Menubar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [level, setUserLevel] = useState(null);

  useEffect(() => {
    if (user && user.userid) {
      axios.post('http://localhost:8081/getUserLevel', { userid: user.userid })
        .then(response => {
          setUserLevel(response.data.level);
        })
        .catch(error => {
          console.error('Error fetching user level:', error);
        });
    }
  }, [user]);

  useEffect(() => {
    axios.get('http://localhost:8081/menu')
      .then(response => setMenuItems(response.data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  const handleNavigation = (path, isUnlocked) => {
    if (isUnlocked) {
      navigate(`${path}`);
    }
  };

  const numberOfCheckedItems = level ? Math.min(level * 4, menuItems.length) : 0;

  return (
    <div className="responsive-menu">
      <div className='menu-bar'>
        <h2>Course Content</h2>
        {user && <h2 className="profile-name">{user.name} - Level: {level}</h2>}
        <div>
          {menuItems.map((item, index) => {
            const isUnlocked = index < numberOfCheckedItems;
            return (
              <div
                className={`menu-li ${isUnlocked ? '' : 'disabled'}`}
                key={item.menu_content_id}
                onClick={() => handleNavigation(item.menu_content_path, isUnlocked)}
                style={{
                  marginBottom: '10px',
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                  color: isUnlocked ? 'black' : 'grey'
                }}
              >
                <input
                  type="checkbox"
                  checked={isUnlocked}
                  readOnly
                  style={{ marginRight: '10px' }}
                />
                <div>
                  {item.menu_content_name}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Routes>
        {menuItems.map(item => (
          <Route
            key={item.menu_content_id}
            path={`/${item.menu_content_path}`}
            element={<div>{item.menu_content_name} Content</div>}
          />
        ))}
      </Routes>
    </div>
  );
};

export default Menubar;
