import React from 'react'
import './All.css'
import Previous from './Previous'
import Next from './Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import Example from './Example';
import Exercise from './Exercise';
import Question from './Question';


const C_Consonants= ({ contentId }) => {
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
        <h1 style={{ fontSize:"40px"}}>C Constants</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Constants</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>If you don't want others (or yourself) to change existing variable values, you can use the const keyword.</li></div>
          <div style={{fontSize: '20px'}}> <li>This will declare the variable as "constant", which means unchangeable and read-only:</li></div>
            </div>    
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <div className='line-one'>
        <div style={{fontSize: "21px"}}>You should always declare the variable as constant when you have values that are unlikely to change:</div>
        </div>
        
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <div className='explanation'>
            <div style={{fontSize:"35px"}}>Good Practice</div>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}><li>Another thing about constant variables, is that it is considered good practice to declare them with uppercase.</li></div>
        <div style={{fontSize: "21px"}}><li>It is not required, but useful for code readability and common for C programmers:</li></div>
        
        </div>
        </div>
        <Exercise contentId={contentId}/>
        <Question contentId={contentId} />
        <div className="buttons">
          <Previous contentId={contentId} />
          <Next contentId={contentId} />
        </div>
      </div>
    </div>
  )
}

export default C_Consonants;