import React, { useContext, useState, useEffect } from 'react';
import './All.css';
import Previous from './Previous'
import Next from './Next';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Example from './Example';
import Exercise from './Exercise';
import Question from './Question';



const C_Array = ({ contentId }) => { 
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
        <h1 style={{ fontSize:"40px"}}>C Arrays</h1>
        <div className='subheading'>
          <div className='explanation'>
            <div style={{fontSize:"35px"}}>Arrays</div>   
            <div className='line-one'>
              <div style={{fontSize: '20px'}}> 
                <li>Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.</li>
              </div>
              <div style={{fontSize: '20px'}}> 
                <li>To create an array, define the data type (like int) and specify the name of the array followed by square brackets [].</li>
              </div>
              <div style={{fontSize: '20px'}}> 
                <li>To insert values to it, use a comma-separated list, inside curly braces:</li>
              </div>
            </div>    
          </div>
        </div>

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Boolean Variables</div>   
          <div className='line-one'>
            <div style={{fontSize: '20px'}}> 
              <li>In C, the bool type is not a built-in data type, like int or char.</li>
            </div>
            <div style={{fontSize: '20px'}}> 
              <li>It was introduced in C99, and you must import the following header file to use it:</li>
            </div>
          </div>    
        </div>

        <div className='example'>
          <div style={{fontSize: "210%"}}>Example</div>
          <div className='firstcode'>
            <div className='code'>
              int myNumbers[] = {'{'}25, 50, 75, 100 {'}'};
            </div>
          </div> 
        </div>
        <div style={{fontSize: '20px', fontWeight:"700"}}>Example: Creating and Using an Array in C</div>

        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />


        <div style={{fontSize: '20px'}}> 
          <li>However, it is more common to return a boolean value by comparing values and variables.</li>
        </div>

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Explanation</div>   
          <div className='line-one'>
            <div style={{fontSize:"30px"}}>1. Array Declaration:</div>   
            <div className='example'>
              <div className='firstcode'>
                <div className='code'>
                  int numbers[5];
                </div>
              </div> 
            </div>
            <div style={{fontSize: '20px'}}> 
              <li>Here, we declare an array named numbers that can hold 5 integers.</li>
            </div>
          </div>    
        </div>

        <div className='explanation'>
          <div style={{fontSize:"30px"}}>2. Array Initialization:</div>  
          <div className='line-one'>
            <div className='example'>
              <div className='firstcode'>
                <div className='code'>
                  numbers[0] = 10;<br />
                  numbers[1] = 20;<br />
                  numbers[2] = 30;<br />
                  numbers[3] = 40;<br />
                  numbers[4] = 50;<br />
                </div>
              </div> 
            </div>
            <div style={{fontSize: '20px'}}> 
              <li>We initialize the array with values 10, 20, 30, 40, 50 by assigning each value to a specific index.</li>
            </div>
          </div>    
        </div>

        <div className='explanation'>
          <div style={{fontSize:"30px"}}>3. Accessing Array Elements:</div>  
          <div className='line-one'>
            <div className='example'>
              <div className='firstcode'> 
                <div className='code'>
                  printf("Element at index %d: %d\n", i, numbers[i]);
                </div>
              </div> 
            </div>
            <div style={{fontSize: '20px'}}> 
              <li>We use a loop to access each element in the array and print it out.</li>
            </div>
          </div>    
        </div>

        <div className='explanation'>
          <div style={{fontSize:"25px"}}>Key Points to Remember</div>   
          <div className='line-one'>
            <div style={{fontSize: '20px'}}> 
              <li><span style={{fontWeight:"600"}}>Array Size:</span> The size of the array is fixed at the time of declaration, and all elements must be of the same data type.</li>
            </div>
            <div style={{fontSize: '20px'}}> 
              <li><span style={{fontWeight:"600"}}>Indexing:</span> Array indexing starts at 0 in C. So, an array of size n has indices ranging from 0 to n-1.</li>
            </div>
            <div style={{fontSize: '20px'}}> 
              <li><span style={{fontWeight:"600"}}>Accessing Elements:</span> You can access and modify elements in the array using their index.</li>
            </div>
          </div>    
        </div>

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Two-Dimensional Arrays</div>   
          <div className='line-one'>
            <div style={{fontSize: '20px'}}> 
              <li>A 2D array is also known as a matrix (a table of rows and columns).</li>
            </div>
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
  );
};



export default C_Array;