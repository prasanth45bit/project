import React from 'react'
import '../All.css'
import Previous from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';
import Exercise from '../Exercise';



export const C_Datatypes_decimal_precision = ({ contentId }) => {


  const { setUser } = useContext(AuthContext);
  const [program] = useState('Syntax');
  const [message, setMessage] = useState('');
  const [code, setCode] = useState(''); 


  const handleProgram = async (ps) => {
    try {
      const response = await axios.post('http://localhost:8081/program', {
        program: ps.program,
      });

      if (response.data.code) {
        setCode(response.data.code); 
        setUser(ps);
      } else {
        setMessage('No code found for the given program.');
      }
    } catch (error) {
      console.error('Error fetching code:', error);
      setMessage('An error occurred while fetching the code.');
    }
  };

  useEffect(() => {
    handleProgram({ program: 'Syntax' });
  }, []);
  return (
    <div className='heading'>
      <div style={{width:'96%',height:'100%',padding:'0 2%'}} >
        <h1 style={{ fontSize:"40px"}}>C Decimal Precision</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Set Decimal Precision</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>You have probably already noticed that if you print a floating point number, the output will show many digits after the decimal point:</li></div>
            </div>    
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>If you want to remove the extra zeros (set decimal precision), you can use a dot (.) followed by a number that specifies how many digits that should be shown after the decimal point:</li></div>
            </div>  
            <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
            <Exercise contentId={contentId}/>
            <div className="buttons">
          <Previous contentId={contentId} />
          <Next contentId={contentId} />
        </div>
      </div>
    </div>
  )
}

export default C_Datatypes_decimal_precision;