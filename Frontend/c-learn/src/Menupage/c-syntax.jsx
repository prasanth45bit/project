import React from 'react';
import './All.css';
import Previous from './Previous';
import Next from './Next';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import Example from './Example';
import Exercise from './Exercise';


export const C_Syntax = ({ contentId }) => {

  const { setUser } = useContext(AuthContext);
  const [program] = useState('Syntax');
  const [message, setMessage] = useState('');
  const [code, setCode] = useState(''); 
  const [code1, setCode1] = useState(''); 
  const [code2, setCode2] = useState(''); 


  const handleProgram = async (ps) => {
    try {
      const response = await axios.post('http://localhost:8081/program', {
        program: ps.program,
      });

      if (response.data.code && response.data.code1) {
        setCode(response.data.code); 
        setCode1(response.data.code1);
        setCode2(response.data.code2); 
        setUser(ps);
      } else {
        setMessage('No code or exercise found for the given program.');
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
        <h1 style={{ fontSize:"40px"}}>C Syntax</h1>
        <div className='subheading'>
          <div style={{fontSize:"40px"}}>Syntax</div>
          <div style={{fontSize: "21px"}}>You have already seen the following code a couple of times in the first chapters. Let's break it down to understand it better:</div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code1} />
        <div className='example-explain'>
          <div>Click on the "Try it Yourself" button to see how it works.</div>
          <div>We recommend reading this tutorial, in the sequence listed in the left menu.</div>
        </div>
        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Explanation of Example</div>
          <div className='line-one'>
          </div>
        </div>
        <Exercise contentId={contentId}/>
        <div className="buttons">
          <Previous contentId={contentId} />
          <Next contentId={contentId} />
        </div>
      </div>
    </div>
  );
}

export default C_Syntax;
