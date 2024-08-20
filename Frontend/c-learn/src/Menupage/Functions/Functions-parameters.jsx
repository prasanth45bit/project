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


const C_Function_parameters = ({contentId}) => {
    
   
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
        <h1 style={{ fontSize:"40px"}}>C Function Parameters</h1>
        
        <div className='explanation'>
          <div className='subheading'>
            <div style={{fontSize:"35px"}}>Understanding Function Parameters in C</div>   
            <div className='line-one'>
              <div style={{fontSize: '20px'}}> <li>Parameters are the variables defined by a function that receive values when the function is called.</li></div>
              <div style={{fontSize: '20px'}}> <li>These parameters are also known as formal parameters.</li></div>
              <div style={{fontSize: '20px'}}> <li>When a function is called, the arguments (actual values) are passed to the function parameters.</li></div>
            </div>    
          </div>
        </div>
        
        <div style={{fontSize:"20px",fontWeight:"600"}}>Example of a Function with Parameters</div>
        
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Explanation</div>   
          <div className='line-one'>
            <div style={{fontSize:"20px",fontWeight:"700"}}>1. Function Declaration:</div>
            <div style={{fontSize: '20px'}}> <li><code>int multiply(int, int);</code> - This declares a function named <code>multiply</code> that takes two integers as parameters and returns an integer.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>2. Function Definition:</div>
            <div style={{fontSize: '20px'}}> <li><code>int multiply(int a, int b) {'{ return a * b; }'}</code> - This defines the actual function where it takes two integers, multiplies them, and returns the result.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>3. Function Call:</div>
            <div style={{fontSize: '20px'}}> <li><code>int result = multiply(num1, num2);</code> - Here, the <code>multiply</code> function is called with <code>num1</code> and <code>num2</code> as arguments, and the returned value is stored in <code>result</code>.</li></div>  
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>4. Output:</div>
            <div style={{fontSize: '20px'}}> <li>The program prints: <code>Product of 5 and 10 is 50</code></li></div> 
          </div>
        </div>

        <div style={{fontSize:"20px",fontWeight:"600"}}>Example of a Function with Multiple Parameters and Return Value</div>
        
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Explanation</div>   
          <div className='line-one'>
            <div style={{fontSize:"20px",fontWeight:"700"}}>1. Function Declaration:</div>
            <div style={{fontSize: '20px'}}> <li><code>float divide(int, int);</code> - This declares a function named <code>divide</code> that takes two integers as parameters and returns a float.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>2. Function Definition:</div>
            <div style={{fontSize: '20px'}}> <li><code>float divide(int a, int b) {'{ if(b == 0) { printf("Error: Division by zero!\\n"); return 0.0; } return (float)a / b; }'}</code> - This function divides the first integer by the second. It checks for division by zero to avoid errors.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>3. Function Call:</div>
            <div style={{fontSize: '20px'}}> <li><code>float quotient = divide(numerator, denominator);</code> - Here, the <code>divide</code> function is called with <code>numerator</code> and <code>denominator</code> as arguments, and the returned value is stored in <code>quotient</code>.</li></div>  
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>4. Output:</div>
            <div style={{fontSize: '20px'}}> <li>The program prints: <code>Quotient of 20 and 4 is 5.00</code></li></div> 
          </div>
        </div>
        <Exercise contentId={contentId}/>
        <div className="buttons">
          <Previous contentId={contentId} />
          <Next contentId={contentId} />
        </div></div>
    </div>
  )
}

export default C_Function_parameters;