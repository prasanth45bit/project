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



const C_If_nested_if = ({ contentId }) => {   

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
        <h1 style={{ fontSize:"40px"}}>C Nested If</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>The Nested if Statement</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}>In C programming, nested if statements refer to placing one if statement inside another. This allows for more complex decision-making processes. You can nest as many if statements as you need, and the inner if statements will only be evaluated if the outer if condition is true.</div>
             </div>    
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Explanation</div>   
        <div className='line-one'>
            <div style={{fontSize:"20px",fontWeight:"700"}}>1.Outer if Statement:</div>
             <div style={{fontSize: '20px'}}> <li>if (number {'>'} 0): This checks whether the number is greater than 0. If this condition is true, the code inside the outer if block will execute.</li></div> 
             <div style={{fontSize:"20px",fontWeight:"700"}}>2.Inner (Nested) if Statement:</div>
             <div style={{fontSize: '20px'}}> <li>If the outer if condition is true, the program will check the nested if statement: if (number % 2 == 0).</li></div> 
             <div style={{fontSize: '20px'}}> <li>This checks whether the number is even (i.e., whether the remainder when dividing by 2 is zero).</li></div> 
             <div style={{fontSize:"20px",fontWeight:"700"}}>3.else Block:</div>
             <div style={{fontSize: '20px'}}> <li>If the inner if condition is false (meaning the number is not even), the else block is executed, which means the number is odd.</li></div> 
             <div style={{fontSize:"20px",fontWeight:"700"}}>4.Outer else Statement:</div>
             <div style={{fontSize: '20px'}}> <li>If the outer if condition (number {'>'} 0) is false, the program will skip the entire nested if and go directly to the outer else block, printing "The number is not positive."</li></div> 
           </div>    
        </div>
        <div className='explanation'>
        <div style={{fontSize:"45px"}}>C Short Hand If Else</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}>There is also a short-hand if else, which is known as the ternary operator because it consists of three operands. It can be used to replace multiple lines of code with a single line. It is often used to replace simple if else statements:</div>
             </div>  
         
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
                 <div style={{fontSize: '20px'}}>It is completely up to you if you want to use the traditional if...else statement or the ternary operator</div>
                 <Exercise contentId={contentId}/>
                 <Question contentId={contentId} />
                 <div className="buttons">
          <Previous contentId={contentId} />
          <Next contentId={contentId} />
        </div>    </div>
    </div>
     
)
}
export default C_If_nested_if;