import React from 'react'
import '../All.css'
import Prebutton from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';



const C_If_else = ({ contentId }) => {   

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
        <h1 style={{ fontSize:"40px"}}>C Else</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>The else Statement</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> Use the else statement to specify a block of code to be executed if the condition is false.</div>
             </div>    
        </div>
        </div>
        <div className='example'>
                <p  style={{fontSize: "210%"}}>Syntax</p>
                <div className='firstcode'>
                <div style={{backgroundColor:"green",width:"0.2%",height:"100%"}}>
                </div>
                <div className='code'>
                    if(condition){
                        <div style={{color:"green"}}>{'//'}  block of code to be executed if the condition is true
           </div>         }
           else{
            <div style={{color:"green"}}>{'//'}block of code to be executed if the condition is false</div>
           }
                 </div>
                </div> 
             </div>
                 <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Example explained</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>In the example above, time (20) is greater than 18, so the condition is false. Because of this, we move on to the else condition and print to the screen "Good evening". If the time was less than 18, the program would print "Good day".</li></div>
           </div>    
        </div>
          <div className="buttons"><Prebutton /><Next/></div>
      </div>
    </div>
  )
}
export default C_If_else;