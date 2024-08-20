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



const C_Operators= ({ contentId }) => {

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
        <h1 style={{ fontSize:"40px"}}>C Operators</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Operators</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Operators are used to perform operations on variables and values.</li></div>
          <div style={{fontSize: '20px'}}> <li>In the example below, we use the + operator to add together two values:</li></div>
            </div>    
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <div style={{fontSize: "21px"}}>Although the + operator is often used to add together two values, like in the example above, it can also be used to add together a variable and a value, or a variable and another variable:</div> 
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <div className='explanation'>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}>C divides the operators into the following groups:</div>
        <div style={{fontSize: "21px"}}><li>Arithmetic operators</li></div>
        <div style={{fontSize: "21px"}}><li>Assignment operators</li></div>
        <div style={{fontSize: "21px"}}><li>Comparison operators</li></div>
        <div style={{fontSize: "21px"}}><li>Logical operators</li></div>
        <div style={{fontSize: "21px"}}><li>Bitwise operators</li></div>
       
        </div>
        </div>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Arithmetic Operators</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Arithmetic operators are used to perform common mathematical operations.</li></div>
            </div>    
        </div>
        <table className='question-table'>
            <tr>
              <th>Operator</th>
              <th>Name</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
            <tr>
              <td>+</td>
              <td>Addition</td>
              <td>Adds togeter two values</td>
              <td>X+Y</td>
            </tr>
            <tr >
              <td>-</td>
              <td>Subraction</td>
              <td>Subracts one value from another</td>
              <td>X-Y</td></tr>
            <tr >
              <td>*</td>
              <td>Multiplication</td>
              <td>Multiples two values</td>
              <td>X*Y</td></tr> 
            <tr >
              <td>/</td>
              <td>Division</td>
              <td>Divides one value by another</td>
              <td>X/Y</td>
            </tr>
            <tr >
              <td>%</td>
              <td>Modulus</td>
              <td>Returns the division remainder</td>
              <td>X%Y</td>
            </tr>
            <tr >
              <td>++</td>
              <td>Increment</td>
              <td>Increases the value of a variable by 1</td>
              <td>++X</td>
            </tr>
            <tr >
              <td>--</td>
              <td>Decrement</td>
              <td>Decreases the value of a variable by 1</td>
              <td>--X</td>
            </tr>
          </table>
          <div className='explanation'>
        <div style={{fontSize:"35px"}}>Arithmetic Operators</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Assignment operators are used to assign values to variables.</li></div>
             <div style={{fontSize: '20px'}}> <li>In the example below, we use the assignment operator (=) to assign the value 10 to a variable called x:</li></div>
            </div>    
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />      
             <div style={{fontSize: '20px'}}> <li>The addition assignment operator (+=) adds a value to a variable:</li></div>
       <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
             <div style={{fontSize: '20px'}}> <li>A list of all assignment operators:</li></div>
            

            <table className='question-table'>
            <tr>
              <th>Operator</th>
              <th>Example</th>
              <th>Same AS</th>
              <th><button></button></th>
            </tr>
            <tr>
              <td>=</td>
              <td>x=5</td>
              <td>x=5</td>
              <td>Try it</td>
            </tr>
            <tr>
              <td>+=</td>
              <td>x+=2</td>
              <td>x=x+2</td>
              <td>Try it</td>
            </tr>
            <tr>
              <td>-=</td>
              <td>x-=2</td>
              <td>x=x-2</td>
              <td>Try it</td>
            </tr>
            <tr>
              <td>*=</td>
              <td>x*=2</td>
              <td>x=x*2</td>
              <td>Try it</td>
            </tr>
            <tr>
              <td>/=</td>
              <td>x/=2</td>
              <td>x=x/2</td>
              <td>Try it</td>
            </tr>
            <tr>
              <td>%=</td>
              <td>x%=2</td>
              <td>x=x%2</td>
              <td>Try it</td>
            </tr>
            <tr>
              <td>&=</td>
              <td>x&=2</td>
              <td>x=x&2</td>
              <td>Try it</td>
            </tr>
            <tr>
              <td>|=</td>
              <td>x|=2</td>
              <td>x=x|2</td>
              <td>Try it</td>
            </tr>
            <tr>
              <td>^=</td>
              <td>x^=2</td>
              <td>x=x^2</td>
              <td>Try it</td>
            </tr>
            <tr>
              <td>{'>>'}=</td>
              <td>x{'>>'}=2</td>
              <td>x=x{'>>'}2</td>
              <td>Try it</td>
            </tr>
            <tr>
              <td>{'<<'}=</td>
              <td>x{'<<'}=2</td>
              <td>x=x{'<<'}2</td>
              <td>Try it</td>
            </tr>
          </table>

          <div className='explanation'>
        <div style={{fontSize:"35px"}}>Comparison Operators</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Comparison operators are used to compare two values (or variables). This is important in programming, because it helps us to find answers and make decisions.</li></div>
             <div style={{fontSize: '20px'}}> <li>The return value of a comparison is either 1 or 0, which means true (1) or false (0). These values are known as Boolean values, and you will learn more about them in the Booleans and If..Else chapter.</li></div>
             <div style={{fontSize: '20px'}}> <li>In the following example, we use the greater than operator to find out if 5 is greater than 3:</li></div>
            </div>    
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <table className='question-table'>
            <tr>
              <th>Operator</th>
              <th>Name</th>
              <th>Example</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>==</td>
              <td>Equal to</td>
              <td>x==y</td>
              <td>Returns 1 if the values are equal</td>
            </tr>
            <tr >
              <td>!=</td>
              <td>Not equal</td>
              <td>x!=y</td>
              <td>Returns 1 if the values are equal</td></tr>
            <tr >
              <td>{'>'}</td>
              <td>Greater than</td>
              <td>x {'>'} y</td>
              <td>Returns 1 if the first value is greater than the second value</td></tr> 
            <tr >
              <td>{'<'}</td>
              <td>Less than</td>
              <td>x{'<'}y</td>
              <td>Returns 1 if the first value is less than the second value</td>
            </tr>
            <tr >
              <td>{'>='}</td>
              <td>Greater than or equal to</td>
              <td>x{'>'}=y</td>
              <td>Returns 1 if the first value is greater than, or equal to, the second value</td>
            </tr>
            <tr >
              <td>{'<'}=</td>
              <td>Less than or equal to</td>
              <td>x{'<'}=y</td>
              <td>Returns 1 if the first value is less than, or equal to, the second value</td>
            </tr>
          </table>
          <div className='explanation'>
        <div style={{fontSize:"35px"}}>Logical Operators</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>You can also test for true or false values with logical operators.</li></div>
             <div style={{fontSize: '20px'}}> <li>Logical operators are used to determine the logic between variables or values, by combining multiple conditions:</li></div>
          </div>    
        </div>
        <table className='question-table'>
            <tr>
              <th>Operator</th>
              <th>Name</th>
              <th>Example</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>&&</td>
              <td>AND</td>
              <td>x{'<'}5||x{'<'}4</td>
              <td>Returns 1 if both statements are true</td>
            </tr>
            <tr >
              <td>||</td>
              <td>OR</td>
              <td>x{'<'}5||x{'<'}4</td>
              <td>Returns 1 if one of the statements is true</td></tr>
            <tr >
              <td>!</td>
              <td>NOT</td>
              <td>!(x{'<'}5&&x{'<'}10)</td>
              <td>Returns 1 if the first value is greater than the second value</td></tr> 
            </table>
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

export default C_Operators;