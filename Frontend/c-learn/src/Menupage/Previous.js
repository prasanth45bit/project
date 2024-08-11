import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";

const Previous = ({ onClick }) => {
    return (
    <div style={{display:"flex",justifyContent:"start"}}>
        <button onClick={onClick}
    style={{
      width: '100%',
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
   <MdKeyboardArrowLeft   style={{ fontSize:"30px"}} />
    Previous
  </button>
  
  </div>
  )
}


export default Previous;