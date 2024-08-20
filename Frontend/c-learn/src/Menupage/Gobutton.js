import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';


function Gobutton({question_id, content_id}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home/trynow-page', { state: {question_id, content_id} });
  };
  return (
    <div>
      <button
        style={{
          width: '80%',
          height: '10%',
          backgroundColor: 'green',
          fontSize: '20px',
          color: 'white',
          borderRadius: '5px',
          padding:'5px 10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
        }}
        onClick={handleClick}
      >
        Go now
        <MdKeyboardDoubleArrowRight style={{ marginLeft: '5px' }} />
      </button>
    </div>
  );
}

export default Gobutton;