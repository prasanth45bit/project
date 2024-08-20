import React from 'react'
import '../All.css'
import Previous from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';
import Exercise from '../Exercise';
import Question from '../Question';


const C_Functions = ({contentId}) => {
      
 
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
        <h1 style={{ fontSize:"40px"}}>C Functions</h1>
        
        <div className='explanation'>
          <div className='subheading'>
            <div style={{fontSize:"35px"}}> Functions in C</div>   
            <div className='line-one'>
              <div style={{fontSize: '20px'}}> <li>A function in C is a block of code that performs a specific task.</li></div>
              <div style={{fontSize: '20px'}}> <li>Functions help in organizing code, making it more readable and reusable.</li></div>
              <div style={{fontSize: '20px'}}> <li>They can take inputs (parameters) and return outputs (return values).</li></div>
            </div>    
          </div>
        </div>
        
        <div style={{fontSize:"20px",fontWeight:"600"}}>Example of a Simple Function</div>
        
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Explanation</div>   
          <div className='line-one'>
            <div style={{fontSize:"20px",fontWeight:"700"}}>1. Function Declaration:</div>
            <div style={{fontSize: '20px'}}> <li><code>int add(int, int);</code> - This tells the compiler that there is a function named <code>add</code> that takes two integers as parameters and returns an integer.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>2. Function Definition:</div>
            <div style={{fontSize: '20px'}}> <li><code>int add(int a, int b) {'{ return a + b; }'}</code> - This defines the actual function where it takes two integers, adds them, and returns the result.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>3. Function Call:</div>
            <div style={{fontSize: '20px'}}> <li><code>int sum = add(num1, num2);</code> - Here, the <code>add</code> function is called with <code>num1</code> and <code>num2</code> as arguments, and the returned value is stored in <code>sum</code>.</li></div>  
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>4. Output:</div>
            <div style={{fontSize: '20px'}}> <li>The program prints: <code>Sum of 10 and 20 is 30</code></li></div> 
          </div>
        </div>

        <div style={{fontSize:"20px",fontWeight:"600"}}>Example of a Function with No Return Type and No Parameters</div>
        
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Explanation</div>   
          <div className='line-one'>
            <div style={{fontSize:"20px",fontWeight:"700"}}>1. Function Declaration:</div>
            <div style={{fontSize: '20px'}}> <li><code>void greet();</code> - This declares a function that doesn't return any value.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>2. Function Definition:</div>
            <div style={{fontSize: '20px'}}> <li><code>void greet() {'{ printf("Hello, welcome to C programming!\\n"); }'}</code> - The function prints a greeting message.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>3. Function Call:</div>
            <div style={{fontSize: '20px'}}> <li><code>greet();</code> - This calls the function to execute its code.</li></div>  
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>4. Output:</div>
            <div style={{fontSize: '20px'}}> <li>The program prints: <code>Hello, welcome to C programming!</code></li></div> 
          </div>
        </div>
        <Exercise contentId={contentId}/>
        <div className="buttons">
          <Previous contentId={contentId} />
          <Next contentId={contentId} />
        </div> </div>
    </div>
  )
}

export default C_Functions;