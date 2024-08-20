import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import '../pages/Exercise.css';

const ContentMenu = ({ onSelect }) => {
  const [menuContents, setMenuContents] = useState([]);
  const [level, setLevel] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
  
    const storedLevel = localStorage.getItem('level');
    if (storedLevel) {
      setLevel(parseInt(storedLevel, 10)); 
    }

    axios.get('http://localhost:8081/menu')
      .then(response => setMenuContents(response.data))
      .catch(error => console.error('Error fetching menu contents:', error));
  }, []);

  const numberOfCheckedItems = level ? Math.min(level, menuContents.length) : 0;

  const handleSelection = (contentId, isNavigable) => {
    if (isNavigable && onSelect) {
      onSelect(contentId );
    }
  };

  return (
    <div className="content-menu">
      <h2>Content</h2>
      <ul>
        {menuContents.map((content, index) => {
          const isUnlocked = index < numberOfCheckedItems;
          const isNavigable = isUnlocked || index === numberOfCheckedItems; 
          return (
            <li
              key={content.menu_content_id}
              onClick={() => handleSelection(content.menu_content_id, isNavigable)}
              style={{
                cursor: isNavigable ? 'pointer' : 'not-allowed',
                color: isNavigable ? 'black' : 'grey'
              }}
            >
              <input
                type="checkbox"
                checked={isUnlocked}
                readOnly
                style={{ marginRight: '10px' }}
              />
              {content.menu_content_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContentMenu;
