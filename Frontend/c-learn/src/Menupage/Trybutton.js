import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

function Trybutton({code}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home/trynow-page', { state: {code} });
  };
  return (
    <div>
      <button
        style={{
          width: '13%',
          height: '80%',
          backgroundColor: 'green',
          fontSize: '20px',
          color: 'white',
          borderRadius: '5px',
          padding: '10px 15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        Try Now
        <MdKeyboardDoubleArrowRight style={{ marginLeft: '5px' }} />
      </button>
    </div>
  );
}

export default Trybutton;
