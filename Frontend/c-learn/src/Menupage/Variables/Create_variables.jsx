import React from 'react'
import '../All.css'
import Prebutton from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';
import Exercise from '../Exercise';


 const C_Variables_create_variables = ({ contentId }) => {

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const { setUser } = useContext(AuthContext);
  const [program] = useState('Loops');
  const [message, setMessage] = useState('');
  const [code, setCode] = useState(''); 


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/questions/${contentId}`);
        setQuestions(response.data);
      } catch (err) {
        setError('Error fetching questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [contentId]);

  

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
      <div style={{width:'96%',height:'100%',padding:'0 2%'}} >
        <h1 style={{ fontSize:"40px"}}>C Variable</h1>
        <div className='subheading'>
        <div className='line-one'>
          <div style={{fontSize: "21px"}}>Variables are containers for storing data values, like numbers and characters.</div>
          <div style={{fontSize: "21px"}}>In C, there are different types of variables (defined with different keywords), for example:</div>
          <div style={{fontSize: '20px'}}> <li> <span style={{fontWeight:"700"}}> int: </span>stores integers (whole numbers), without decimals, such as 123 or -123</li></div>
          <div style={{fontSize: '20px'}}> <li><span style={{fontWeight:"700"}}> float: </span>stores floating point numbers, with decimals, such as 19.99 or -19.99</li></div>
          <div style={{fontSize: '20px'}}> <li><span style={{fontWeight:"700"}}> char: </span>stores single characters, such as 'a' or 'B'. Characters are surrounded by single quotes</li></div>
            </div>    
        </div>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Declaring (Creating) Variables</div>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}>To create a variable, specify the type and assign it a value:   </div>
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

            <div className='explanation'>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}><li>Where type is one of C types (such as int), and variableName is the name of the variable (such as x or myName). The equal sign is used to assign a value to the variable</li></div>
        <div style={{fontSize: "21px"}}><li>So, to create a variable that should store a number, look at the following example:</li></div>
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

          <div className='explanation'>
            <div style={{fontSize:"35px"}}>Explaintion of Example</div>
            <div className='line-one'>
            <span style={{color:"black",fontWeight:"700"}}>1.int age = 25;</span>
                <div style={{fontSize: '20px'}}> <li> This line defines an integer variable named age and initializes it with the value 25.</li></div>
            <span style={{color:"black",fontWeight:"700"}}>2.float height = 5.9;;</span>
                <div style={{fontSize: '20px'}}> <li>Defines a floating-point variable height and sets it to 5.9.</li></div>
            <span style={{color:"black",fontWeight:"700"}}>3.double distance = 12345.6789;</span>
                <div style={{fontSize: '20px'}}> <li>A double-precision floating-point variable distance is initialized with 12345.6789.</li></div>
            <span style={{color:"black",fontWeight:"700"}}>4.char grade = 'A';</span>
                <div style={{fontSize: '20px'}}> <li>A character variable grade is set to 'A'.</li></div>
            <span style={{color:"black",fontWeight:"700"}}>5.char name[] = "John Doe";</span>
                <div style={{fontSize: '20px'}}> <li>An array of characters (name) is defined and initialized with the string "John Doe".</li></div>
            <span style={{color:"black",fontWeight:"700"}}>6. _Bool is_student = 1;</span>
                <div style={{fontSize: '20px'}}> <li>A boolean variable is_student is defined (using _Bool) and set to true (which is represented by 1 in C).</li></div>
             </div>
          </div>
          <div className='explanation'>
          <div  style={{fontSize: "210%"}}>Output Variables</div>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}>You learned from the output chapter that you can output values/print text with the printf() function</div>
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <Exercise contentId={contentId}/>
      </div>
    </div>
  )
}

export default C_Variables_create_variables;