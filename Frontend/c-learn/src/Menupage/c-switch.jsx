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

const C_Switch = ({ contentId }) => {  
  
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
        <h1 style={{ fontSize:"40px"}}>C Switch</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Switch Statement</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}>Instead of writing many if..else statements, you can use the switch statement</div>
             <div style={{fontSize: '20px'}}>The switch statement selects one of many code blocks to be executed:</div>
             </div>  
             </div>  
        </div>  
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <div className='explanation'>    
        <div className='line-one'>
            <div style={{fontSize:"20px"}}>This is how it works:</div>
             <div style={{fontSize: '20px'}}> <li>The switch expression is evaluated once</li></div> 
             <div style={{fontSize: '20px'}}> <li>The value of the expression is compared with the values of each case</li></div> 
             <div style={{fontSize: '20px'}}> <li>If there is a match, the associated block of code is executed</li></div> 
            <div style={{fontSize: '20px'}}> <li>The break statement breaks out of the switch block and stops the execution</li></div> 
            <div style={{fontSize: '20px'}}> <li>The default statement is optional, and specifies some code to run if there is no case match</li></div> 
            <div style={{fontSize:"20px"}}>The example below uses the weekday number to calculate the weekday name:</div>
            </div>
           </div> 
           <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />      
        <div className='explanation'>
        <div style={{fontSize:"45px"}}>The break Keyword</div>   
        <div className='line-one'>
        <div style={{fontSize: '20px'}}> <li>When C reaches a break keyword, it breaks out of the switch block.</li></div> 
            <div style={{fontSize: '20px'}}> <li>This will stop the execution of more code and case testing inside the block.</li></div> 
            <div style={{fontSize: '20px'}}> <li>When a match is found, and the job is done, it's time for a break. There is no need for more testing.</li></div> 
           </div>     
        </div>
        <div style={{fontSize: '20px',marginTop:"1%",display:"flex",alignItems:"center",borderRadius:"10px",backgroundColor:"yellow",height:"10%"}}> <li>When C reaches a break keyword, it breaks out of the switch block.</li></div> 
       
        <div className='explanation'>
        <div style={{fontSize:"45px"}}>The default Keyword</div>   
        <div className='line-one'>
        <div style={{fontSize: '20px'}}> <li>The default keyword specifies some code to run if there is no case match:</li></div> 
       </div>     
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
                 <div style={{fontSize: '20px',marginTop:'1%'}}>It is completely up to you if you want to use the traditional if...else statement or the ternary operator</div>
                 <Exercise contentId={contentId}/>
                 <Question contentId={contentId} />
                 <div className="buttons">
          <Previous contentId={contentId} />
          <Next contentId={contentId} />
        </div>    </div>
    </div>
     
)
}
export default C_Switch;