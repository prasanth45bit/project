import React from 'react'
import '../All.css'
import Prebutton from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';
import Exercise from '../Exercise';


const C_If = ({ contentId }) => {
  
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
        <h1 style={{ fontSize:"40px"}}>C If ... Else</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Conditions and If Statements</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> You have already learned that C supports the usual logical conditions from mathematics:</div>
             <div style={{fontSize: '20px'}}> <li>Less than: a {'<'}b </li></div>
             <div style={{fontSize: '20px'}}> <li>Less than or equal to: a {'<'}= b</li></div>
             <div style={{fontSize: '20px'}}> <li>Greater than: a {'<'}b</li></div>
             <div style={{fontSize: '20px'}}> <li>Equal to a == b</li></div>
             <div style={{fontSize: '20px'}}> <li>Not Equal to: a != b</li></div>
              </div>    
        </div>
        </div>
        <div className='line-one'>
        <div>You can use these conditions to perform different actions for different decisions.</div>
        <div>C has the following conditional statements:</div>
             <div style={{fontSize: '20px'}}> <li>Use if to specify a block of code to be executed, if a specified condition is true</li></div>
             <div style={{fontSize: '20px'}}> <li>Use else to specify a block of code to be executed, if the same condition is false</li></div>
             <div style={{fontSize: '20px'}}> <li>Use else if to specify a new condition to test, if the first condition is false</li></div>
             <div style={{fontSize: '20px'}}> <li>Use switch to specify many alternative blocks of code to be executed</li></div>
            

        </div>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>The if Statement</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Use the if statement to specify a block of code to be executed if a condition is true</li></div>
           </div>    
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

                 <div style={{fontSize: '20px',backgroundColor:"yellow",height:"10%",marginTop:"10px",display:"flex",alignItems:"center",borderRadius:"10px"}}> <li>From the example above, you can see that the return value is a boolean value (1)</li></div>
       
                 <div style={{fontSize: '20px'}}> <li>In the example below, we test two values to find out if 20 is greater than 18. If the condition is true, print some text:</li></div>
                 <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div style={{fontSize: '20px'}}> <li>We can also test variables:</li></div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

      <div className='line-one'>
             <div style={{fontSize: '20px'}}>Example explained</div>
             <div style={{fontSize: '20px'}}> <li>In the example above we use two variables, x and y, to test whether x is greater than y (using the {'>'} operator). As x is 20, and y is 18, and we know that 20 is greater than 18, we print to the screen that "x is greater than y".</li></div>
            </div>    
            <Exercise contentId={contentId}/>           
          <div className="buttons"><Prebutton /><Next/></div>
      </div>
    </div>
  )
}

export default C_If;