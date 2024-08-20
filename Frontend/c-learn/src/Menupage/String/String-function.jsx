import React from 'react'
import '../All.css'
import Previous from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';
import Question from '../Question';

const C_String_function = ({contentId}) => {

    
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
        <h1 style={{ fontSize:"40px"}}>C String Functions</h1>
        <div className='explanation'>
        <div className='subheading'>
        <div style={{fontSize:"35px"}}>String Functions</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>C also has many useful string functions, which can be used to perform certain operations on strings.</li></div>
             <div style={{fontSize: '20px'}}> <li> To use them, you must include the {'<string.h>'} header file in your program:</li></div>    
          </div>    
        </div>
        <div className='example'>
                <div className='firstcode'>
                <div className='code'>
                #include {'<string.h>'}
                </div>
                </div>  
                 </div>
        </div>  
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>String Length</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>For example, to get the length of a string, you can use the strlen() function:</li></div> 
          </div>
          <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code}/>
          <div style={{fontSize: '20px'}}> <li>In the Strings chapter, we used sizeof to get the size of a string/array. Note that sizeof and strlen behaves differently, as sizeof also includes the \0 character when counting:</li></div> 
          <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code}/>
          <div style={{fontSize: '20px'}}> <li>It is also important that you know that sizeof will always return the memory size (in bytes), and not the actual string length:</li></div> 
          <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code}/>
          <div className='explanation'>
        <div style={{fontSize:"35px"}}>Concatenate Strings</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>To concatenate (combine) two strings, you can use the strcat() function:</li></div>
          </div>    
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code}/>
        <div style={{fontSize:"20px",backgroundColor:'yellow',height:"10%",marginTop:"1%",display:"flex",alignItems:"center",}}> <li>Note that the size of str1 should be large enough to store the result of the two strings combined (20 in our example).</li></div>
        <Question contentId={contentId} />
        <div className="buttons">
          <Previous contentId={contentId} />
          <Next contentId={contentId} />
        </div>      </div>
    </div>
    </div>
  )
}
export default C_String_function;