import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../pages/Exercise.css';
import { AuthContext } from '../AuthContext';

const ContentMenu = ({ onSelect = 1 }) => {
  const [contents, setContents] = useState([]);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Store error information
  const [level, setUserLevel] = useState(null);



  useEffect(() => {
    if (user && user.userid) {
      axios.post('http://localhost:8081/getUserLevel', { userid: user.userid })
        .then(response => {
          setUserLevel(response.data.level);
          console.log(response.data.level);
        })
        .catch(error => {
          console.error('Error fetching user level:', error);
        });
    }
  }, [user]);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous error

      try {
        const response = await axios.get('http://localhost:8081/contents');
        setContents(response.data);
      } catch (error) {
        console.error('Error fetching content:', error);
        setError(error); // Store error for display
      } finally {
        setIsLoading(false); // Set loading state to false after fetching (success or failure)
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once

  return (
    <div className="content-menu">
      <h2>Content</h2>
      {user && (
        <h2 className="profile-name">
          {user.name} - Level: {level}
        </h2>
      )}

      {isLoading ? (
        <p>Loading content...</p> // Display loading message while fetching
      ) : error ? (
        <p className="error-message">Error fetching content: {error.message}</p> // Display error message
      ) : (
        <ul>
          {contents.map((content) => (
            <li key={content.content_id} onClick={() => onSelect(content.content_id)}>
              {content.content_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContentMenu;
