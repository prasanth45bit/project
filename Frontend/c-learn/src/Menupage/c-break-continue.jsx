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



const C_Break_continue = ({ contentId }) => {

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
        <h1 style={{ fontSize:"40px"}}>C Break and Continue</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Break</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch statement.</li></div>
             <div style={{fontSize: '20px'}}> <li>The break statement can also be used to jump out of a loop.</li></div>
             <div style={{fontSize: '20px'}}> <li>This example jumps out of the for loop when i is equal to 4:</li></div>
            </div>    
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Continue</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.</li></div>
             <div style={{fontSize: '20px'}}> <li>This example skips the value of 4:</li></div>
            </div>    
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

<div className='explanation'>
        <div style={{fontSize:"35px"}}>Break and Continue in While Loop</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>You can also use break and continue in while loops:</li></div>
             </div>    
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
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

export default C_Break_continue;