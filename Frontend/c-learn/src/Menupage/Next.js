import React, { useState, useEffect } from 'react';
import { MdNavigateNext } from "react-icons/md";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Next = ({ contentId }) => {
  const [nextContent, setNextContent] = useState(null); 
  const navigate = useNavigate();
  
  const fetchNextContent = async () => {
    try {
      const newcontentId = contentId + 1;
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

  const handleNextClick = () => {
    if (nextContent && nextContent.path) {
      const pathSegments = nextContent.path.split('/');
      const rootPath = pathSegments.length > 1 ? pathSegments[1] : pathSegments[0];
      
      console.log('Navigating to:', `/home/${rootPath}`);
      
      navigate(`/home/${rootPath}`); 
    } else {
      console.error('Next content path is invalid or not found');
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <button 
        onClick={handleNextClick}
        style={{
          width: '100%',
          height: '45px',
          backgroundColor: 'green',
          fontSize: '20px',
          color: 'white',
          borderRadius: '5px',
          marginTop: "10px",
          padding: '10px 15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
        }}
      >
        Next
        <MdNavigateNext style={{ marginLeft: '10px', fontSize: "30px" }} />
      </button>
    </div>
  );
};

export default Next;
