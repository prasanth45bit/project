import React from 'react'
import '../All.css'
import Previous from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';
import Exercise from '../Exercise';
import Question from '../Question';



const C_Varriable_multiple_variables = ({ contentId }) => {

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
      <h1 style={{ fontSize:"40px"}}>C Declare Multiple Variables</h1>
         
        <div className='subheading'>
    <div className='explanation'>
            <div  style={{fontSize: "210%"}}>Declare Multiple Variables</div>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}>To declare more than one variable of the same type, use a comma-separated list:</div>
        </div>
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
    <div style={{fontSize:"20px",padding:"2%"}}>You can also assign the same value to multiple variables of the same type:</div>
    <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
    <Exercise contentId={contentId}/>
    <Question contentId={contentId} />
    <div className="buttons">
          <Previous contentId={contentId} />
          <Next contentId={contentId} />
        </div>      </div>
    </div>
  )
}

export default C_Varriable_multiple_variables;