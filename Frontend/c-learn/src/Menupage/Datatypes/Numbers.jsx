import React from 'react'
import '../All.css'
import Prebutton from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';
import Exercise from '../Exercise';
import Question from '../Question';



export const C_Datatypes_numbers = ({ contentId }) => {

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
        <h1 style={{ fontSize:"40px"}}>C Numeric Data Types</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Numeric Types</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Use int when you need to store a whole number without decimals, like 35 or 1000, and float or double when you need a floating point number (with decimals), like 9.99 or 3.14515.</li></div>
            </div>    
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
        <div style={{fontSize:"35px"}}>float vs double</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>The precision of a floating point value indicates how many digits the value can have after the decimal point. The precision of float is six or seven decimal digits, while double variables have a precision of about 15 digits. Therefore, it is often safer to use double for most calculations - but note that it takes up twice as much memory as float (8 bytes vs. 4 bytes).</li></div>
            </div>    
        </div>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Scientific Numbers</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>A floating point number can also be a scientific number with an "e" to indicate the power of 10:</li></div>
            </div>    
        </div>

        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <Exercise contentId={contentId}/>
        <Question contentId={contentId} />
      </div>
    </div>
  )
}

export default C_Datatypes_numbers;