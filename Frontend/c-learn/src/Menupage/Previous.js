import { MdKeyboardArrowLeft } from "react-icons/md";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Previous = ({ contentId }) => {
  const [nextContent, setNextContent] = useState(null); 
  const navigate = useNavigate();
  
  const fetchNextContent = async () => {
    try {
      const newcontentId = contentId - 1;
      const response = await axios.get(`http://localhost:8081/new-content/${newcontentId}`);
      if (response.data) {
        setNextContent(response.data);
      }
    } catch (error) {
      console.error('Error fetching next content:', error);
    }
  };

  useEffect(() => {
    if (contentId) {
      fetchNextContent(); 
    }
  }, [contentId]);

  const handlePreviousClick = () => {
    if (nextContent && nextContent.path) {
      const pathSegments = nextContent.path.split('/');
      const rootPath = pathSegments.length > 1 ? pathSegments[0] : nextContent.path;
      navigate(`/home/${rootPath}`);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "start" }}>
      <button         
        onClick={handlePreviousClick}
        style={{
          width: '100%',
          height: '45px',
          backgroundColor: 'green',
          fontSize: '20px',
          color: 'white',
          borderRadius: '5px',
          padding: '10px 15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
        }}
      >
        <MdKeyboardArrowLeft style={{ fontSize: "30px" }} />
        Previous
      </button>
    </div>
  );
}

export default Previous;
