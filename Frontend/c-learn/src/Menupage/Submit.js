import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Submit({ contentId }) {
  const navigate = useNavigate();

  const handleSubmit = (contentId) => {


    // let currentLevel = parseInt(localStorage.getItem('level'), 10);
    // if (!isNaN(currentLevel)) {
    //   localStorage.setItem('level', currentLevel + 1);
    // }

    const onSelect = contentId;

    navigate(`/home/exercise`);
  };

  return (
    <div>
      <button
        style={{
          width: '15%',
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
        }} onClick={() =>{ navigate("/home/exercise")}}>
        Submit 
        <MdKeyboardDoubleArrowRight style={{ marginLeft: '5px' }} />
      </button>
    </div>
  );
}

export default Submit;
