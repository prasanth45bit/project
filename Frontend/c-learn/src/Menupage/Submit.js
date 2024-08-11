import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

function Submit() {
  return (
    <div>
      <button
        style={{
          width: '15%',
          height: '100%',
          backgroundColor: 'green',
          fontSize: '20px',
          color: 'white',
          borderRadius: '5px',
          padding:'10px 15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
        }}
      >
        Submit 
        <MdKeyboardDoubleArrowRight style={{ marginLeft: '5px' }} />
      </button>
    </div>
  );
}

export default Submit;