import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import './All.css';
import Next from './Next';
import axios from 'axios';
import Previous from './Previous';
import Example from './Example';
import Exercise from './Exercise';
import Question from './Question';


const C_Comments = ({ contentId }) => {

  const { setUser } = useContext(AuthContext);
  const [program] = useState('Loops');
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
    handleProgram({ program: 'Loops' });
  }, []);

  return (
    <div className='heading'>
        <div style={{width:'96%',height:'100%',padding:'2%'}} >

        <div className="subheading">
        <div style={{fontSize:"40px"}}>Comments in C</div>
            <div className='line-one'>
            <div style={{fontSize: "21px"}}><li>Comments can be used to explain code, and to make it more readable. It can also be used to prevent execution when testing alternative code.</li></div>
        <div style={{fontSize: "21px"}}><li>Comments can be  <span style={{color:"black",fontWeight:"700"}}>singled-lined </span> or <span style={{color:"black",fontWeight:"700"}}>multi-lined.</span> </li></div>
        </div>        
        </div>
         <div className='explanation'>
        <div style={{fontSize:"40px"}}>Single-line Comments</div>
        <div className='line-one'>
            <li>Single-line comments start with two forward slashes (//).</li>
            <li>Any text between // and the end of the line is ignored by the compiler (will not be executed).</li>
            <li>This example uses a single-line comment before a line of code:</li>
        </div>  
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

            <li style={{fontSize: "21px",padding:"2% 0"}}>This example uses a single-line comment at the end of a line of code:</li>
            <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

            <div className='explanation'>
            <div style={{fontSize:"40px"}}>C Multi-line Comments</div>
            <div className='line-one'>
            <li>Multi-line comments start with /* and ends with */.</li>
            <li>Any text between /* and */ will be ignored by the compiler:</li>
        </div>  
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
            <div className='explanation'>
                <div style={{fontSize:"30px"}}>Single or multi-line comments?</div>
                <div className='line-one'>
                <li>Click on the "Try it Yourself" button to see how it works.</li>
                <li>We recommend reading this tutorial, in the sequence listed in the left menu.</li>
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


export default C_Comments;