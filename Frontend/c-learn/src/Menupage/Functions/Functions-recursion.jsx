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



const C_Function_recursion = ({contentId}) => {
 
    
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
        <h1 style={{ fontSize:"40px"}}>C Function Recursion</h1>
        
        <div className='explanation'>
          <div className='subheading'>
            <div style={{fontSize:"35px"}}>Understanding Function Recursion in C</div>   
            <div className='line-one'>
              <div style={{fontSize: '20px'}}> <li>Recursion is a process in which a function calls itself as a subroutine.</li></div>
              <div style={{fontSize: '20px'}}> <li>It allows the function to be repeated several times, as it can call itself during its execution.</li></div>
              <div style={{fontSize: '20px'}}> <li>Recursion must have a base case to stop the recursive calls and prevent infinite loops.</li></div>
            </div>    
          </div>
        </div>
        
        <div style={{fontSize:"20px",fontWeight:"600"}}>Example of a Recursive Function to Calculate Factorial</div>
        
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Explanation</div>   
          <div className='line-one'>
            <div style={{fontSize:"20px",fontWeight:"700"}}>1. Base Case:</div>
            <div style={{fontSize: '20px'}}> <li><code>if (n == 0 || n == 1){'{ return 1; }'}</code> - The base case stops the recursion when <code>n</code> is 0 or 1. Without this, the function would call itself indefinitely.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>2. Recursive Case:</div>
            <div style={{fontSize: '20px'}}> <li><code>return n * factorial(n - 1);</code> - This is where the function calls itself. The factorial of <code>n</code> is calculated by multiplying <code>n</code> by the factorial of <code>n-1</code>.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>3. Function Call:</div>
            <div style={{fontSize: '20px'}}> <li><code>int result = factorial(num);</code> - The recursive function is called with <code>num</code> as an argument. The recursion continues until it hits the base case.</li></div>  
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>4. Output:</div>
            <div style={{fontSize: '20px'}}> <li>The program prints: <code>Factorial of 5 is 120</code>, as the recursion computes 5 * 4 * 3 * 2 * 1 = 120.</li></div> 
          </div>
        </div>

        <div style={{fontSize:"20px",fontWeight:"600"}}>Example of a Recursive Function for Fibonacci Sequence</div>
        
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Explanation</div>   
          <div className='line-one'>
            <div style={{fontSize:"20px",fontWeight:"700"}}>1. Base Case:</div>
            <div style={{fontSize: '20px'}}> <li><code>if (n == 0) {'{ return 0; } '}</code> - The base case stops the recursion when <code>n</code> is 0, as the 0th Fibonacci number is 0.</li></div> 
            <div style={{fontSize: '20px'}}> <li><code>else if (n == 1) {'{ return 1; }'}</code> - Another base case for when <code>n</code> is 1, as the 1st Fibonacci number is 1.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>2. Recursive Case:</div>
            <div style={{fontSize: '20px'}}> <li><code>return fibonacci(n - 1) + fibonacci(n - 2);</code> - The function calls itself twice to calculate the sum of the two preceding Fibonacci numbers.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>3. Function Call:</div>
            <div style={{fontSize: '20px'}}> <li><code>int result = fibonacci(num);</code> - The recursive function is called with <code>num</code> as an argument. The recursion continues until it hits the base cases.</li></div>  
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>4. Output:</div>
            <div style={{fontSize: '20px'}}> <li>The program prints: <code>Fibonacci number at position 6 is 8</code>, as the recursion computes 8 (the 6th Fibonacci number).</li></div> 
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

export default C_Function_recursion;