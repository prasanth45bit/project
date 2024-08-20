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

 const C_Forloop = ({ contentId }) => {

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
        <h1 style={{ fontSize:"40px"}}>C For Loop</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>For Loop</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop:</li></div>
            </div>    
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />             
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Do While Loop</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li><span style={{fontSize:"700"}}>Expression 1 </span> is executed (one time) before the execution of the code block.</li></div>
             <div style={{fontSize: '20px'}}> <li><span style={{fontSize:"700"}}>Expression 2 </span>  defines the condition for executing the code block.</li></div>
             <div style={{fontSize: '20px'}}> <li><span style={{fontSize:"700"}}>Expression 3 </span>is executed (every time) after the code block has been executed.</li></div>
             <div style={{fontSize: '20px'}}> <li>The example below will print the numbers 0 to 4:</li></div>
           </div>    
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

          <div className='explanation'>
        <div style={{fontSize:"35px"}}>Example explained</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Expression 1 sets a variable before the loop starts (int i = 0).</li></div>
             <div style={{fontSize: '20px'}}> <li>Expression 2 defines the condition for the loop to run (i must be less than 5). If the condition is true, the loop will start over again, if it is false, the loop will end.</li></div>
             <div style={{fontSize: '20px'}}> <li>Expression 3 increases a value (i++) each time the code block in the loop has been executed.</li></div>
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
export default C_Forloop;