import React from 'react'
import '../All.css'
import Prebutton from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';


const C_If_else_if= ({ contentId }) => {   

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
        <h1 style={{ fontSize:"40px"}}>C Else If</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>The else if Statement</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}>Use the else if statement to specify a new condition if the first condition is false.</div>
             </div>    
        </div>
        </div>
        <div className='example'>
                <p  style={{fontSize: "210%"}}>Syntax</p>
                <div className='firstcode'>
                <div style={{backgroundColor:"green",width:"0.2%",height:"100%"}}>
                </div>
                <div className='code'>
                    if(condition1){
                        <div style={{color:"green"}}>{'//'}  block of code to be executed if the condition1 is true
           </div>         }
           else if(condition2){
            <div style={{color:"green"}}>{'//'}block of code to be executed if the condition1 is false and condition2 is true
</div>
           }
           else{
 <div style={{color:"green"}}>{'//'}block of code to be executed if the condition1 is false and condition2 is false</div>
           }
                 </div>
                </div> 
                 </div>
                 <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Example explained</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>In the example above, time (22) is greater than 10, so the first condition is false. The next condition, in the else if statement, is also false, so we move on to the else condition since condition1 and condition2 is both false - and print to the screen "Good evening".</li></div>
             <div style={{fontSize: '20px'}}> <li>However, if the time was 14, our program would print "Good day."</li></div>
            </div>
            </div>
          <div className="buttons"><Prebutton /><Next/></div>
      </div>
    </div>
  )
}
export default C_If_else_if;