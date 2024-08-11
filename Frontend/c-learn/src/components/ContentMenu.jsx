import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/Exercise.css'

const ContentMenu = ({ onSelect = 1 }) => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/contents')
      .then(response => setContents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="content-menu">
      <h2>Content</h2>
      <ul>
        {contents.map(content => (
          <li key={content.content_id} onClick={() => onSelect(content.content_id)}>
            {content.content_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentMenu;