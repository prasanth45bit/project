import React from 'react'
import './All.css'
import Previous from './Previous';
import Next from './Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import Example from './Example';
import Exercise from './Exercise'
import Question from './Question';


const C_Whileloop = ({ contentId }) => {

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
        <h1 style={{ fontSize:"40px"}}>C While Loop</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Loops</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Loops can execute a block of code as long as a specified condition is reached.</li></div>
             <div style={{fontSize: '20px'}}> <li>Loops are handy because they save time, reduce errors, and they make code more readable.</li></div>
            </div>    
        </div>
        </div>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>While Loop</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>The while loop loops through a block of code as long as a specified condition is true:</li></div>
          </div>    
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

               <div style={{fontSize: '20px'}}>In the example below, the code in the loop will run, over and over again, as long as a variable (i) is less than 5:e</div>
               <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
          <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Do While Loop</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.</li></div>
           </div>    
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

                 <div style={{fontSize: '20px'}}>The example below uses a do/while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:</div>
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
export default C_Whileloop;