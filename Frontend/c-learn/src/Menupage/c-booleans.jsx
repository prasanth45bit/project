import React from 'react'
import './All.css'
import Question from './Question';
import Previous from './Previous'
import Next from './Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import Example from './Example';
import Exercise from './Exercise';


const C_Booleans = ({ contentId }) => {
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
        <h1 style={{ fontSize:"40px"}}>Booleans</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Booleans</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Very often, in programming, you will need a data type that can only have one of two values, like:</li></div>
             <div style={{fontSize: '20px'}}> <li>YES/NO</li></div>
             <div style={{fontSize: '20px'}}> <li>ON/OFF</li></div>
             <div style={{fontSize: '20px'}}> <li>TRUE/FALSE</li></div>
             <div>For this, C has a bool data type, which is known as booleans. </div>
             <div>Booleans represent values that are either true or false.</div>
            </div>    
        </div>
        </div>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Boolean Variables</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>In C, the bool type is not a built-in data type, like int or char.</li></div>
             <div style={{fontSize: '20px'}}> <li>It was introduced in C99, and you must import the following header file to use it:</li></div>
            </div>    
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

                 <div style={{fontSize: '20px'}}> <li>A boolean variable is declared with the bool keyword and can take the values true or false:</li></div>
                 <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

                 <div className='line-one'>
                 <div style={{fontSize: '20px'}}> <li>Before trying to print the boolean variables, you should know that boolean values are returned as integers:</li></div>
                 <div style={{fontSize: '20px'}}> <li>1 (or any other number that is not 0) represents true</li></div>
                 <div style={{fontSize: '20px'}}> <li>0 represents false</li></div>
                 <div style={{fontSize: '20px'}}> Therefore, you must use the %d format specifier to print a boolean value</div>
                 </div>
                 <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div style={{fontSize: '20px'}}> <li>However, it is more common to return a boolean value by comparing values and variables.</li></div>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Comparing Values and Variables</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Comparing values are useful in programming, because it helps us to find answers and make decisions.</li></div>
             <div style={{fontSize: '20px'}}> <li>For example, you can use a comparison operator, such as the greater than operator, to compare two values:</li></div>
            </div>    
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div style={{fontSize: '20px',backgroundColor:"yellow",height:"10%",marginTop:"10px",display:"flex",alignItems:"center",borderRadius:"10px"}}> <li>From the example above, you can see that the return value is a boolean value (1)</li></div>
        <div style={{fontSize: '20px'}}> <li>You can also compare two variables:</li></div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
   
        <div style={{fontSize: '20px'}}> <li>In the example below, we use the equal to (==) operator to compare different values:</li></div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div style={{fontSize: '20px'}}> <li>You are not limited to only compare numbers. You can also compare boolean variables, or even special structures, like arrays (which you will learn more about in a later chapter):</li></div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div style={{fontSize: '20px',backgroundColor:"yellow",height:"10%",marginTop:"10px",display:"flex",alignItems:"center",borderRadius:"10px"}}> <li>Remember to include the {'<'} stdbool.h {'>'} header file when working with bool variables.</li></div>
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

export default C_Booleans;
