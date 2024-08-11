import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

function Trybutton() {
  return (
    <div>
      <button
        style={{
          width: '17%',
          height: '80%',
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
        Try it yourself
        <MdKeyboardDoubleArrowRight style={{ marginLeft: '5px' }} />
      </button>
    </div>
  );
}

export default Trybutton;