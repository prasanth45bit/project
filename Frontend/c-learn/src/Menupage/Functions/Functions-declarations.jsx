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


const C_Function_declaration = ({contentId}) => {
   
   
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
        <h1 style={{ fontSize:"40px"}}>C Function Declaration</h1>
        
        <div className='explanation'>
          <div className='subheading'>
            <div style={{fontSize:"35px"}}>Understanding Function Declaration in C</div>   
            <div className='line-one'>
              <div style={{fontSize: '20px'}}> <li>Function declaration is also known as function prototype.</li></div>
              <div style={{fontSize: '20px'}}> <li>It specifies the function's name, return type, and the parameters it accepts.</li></div>
              <div style={{fontSize: '20px'}}> <li>The function declaration must match the definition in both return type and parameter types.</li></div>
            </div>    
          </div>
        </div>
        
        <div style={{fontSize:"20px",fontWeight:"600"}}>Example of a Function Declaration</div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Explanation</div>   
          <div className='line-one'>
            <div style={{fontSize:"20px",fontWeight:"700"}}>1. Function Declaration:</div>
            <div style={{fontSize: '20px'}}> <li><code>int add(int, int);</code> - This declares a function named <code>add</code> that takes two integers as parameters and returns an integer. The parameter names are optional in the declaration but must be specified in the function definition.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>2. Function Definition:</div>
            <div style={{fontSize: '20px'}}> <li><code>int add(int a, int b) {'{ return a + b; }'}</code> - This defines the actual function where it takes two integers, adds them, and returns the result.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>3. Function Call:</div>
            <div style={{fontSize: '20px'}}> <li><code>int sum = add(num1, num2);</code> - Here, the <code>add</code> function is called with <code>num1</code> and <code>num2</code> as arguments, and the returned value is stored in <code>sum</code>.</li></div>  
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>4. Output:</div>
            <div style={{fontSize: '20px'}}> <li>The program prints: <code>Sum of 10 and 20 is 30</code></li></div> 
          </div>
        </div>

        <div style={{fontSize:"20px",fontWeight:"600"}}>Example of a Function Declaration with No Parameters</div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Explanation</div>   
          <div className='line-one'>
            <div style={{fontSize:"20px",fontWeight:"700"}}>1. Function Declaration:</div>
            <div style={{fontSize: '20px'}}> <li><code>void greet();</code> - This declares a function named <code>greet</code> that takes no parameters and returns nothing (void).</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>2. Function Definition:</div>
            <div style={{fontSize: '20px'}}> <li><code>void greet() {'{ printf("Hello, World!\\n"); }'}</code> - This defines the actual function where it prints a greeting message.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>3. Function Call:</div>
            <div style={{fontSize: '20px'}}> <li><code>greet();</code> - Here, the <code>greet</code> function is called, which simply executes the print statement.</li></div>  
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>4. Output:</div>
            <div style={{fontSize: '20px'}}> <li>The program prints: <code>Hello, World!</code></li></div> 
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

export default C_Function_declaration;