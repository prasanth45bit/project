import React from 'react'
import { MdNavigateNext } from "react-icons/md";

const Next = ({ onClick }) => {
  return (
    <div style={{display:"flex",justifyContent:"end"}}>
        <button onClick={onClick}
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'green',
      fontSize: '20px',
      color: 'white',
      borderRadius: '5px',
      marginTop: "10px",
      padding:'10px 15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
    }}
  >
    Next
    <MdNavigateNext  style={{ marginLeft: '10px',fontSize:"30px" }} />
  </button>
  
  </div>
  )
}

export default Next;