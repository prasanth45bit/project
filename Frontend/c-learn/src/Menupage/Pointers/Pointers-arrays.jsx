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


const C_Pointers_arrays= ({contentId}) => {

 
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
        <h1 style={{ fontSize:"40px"}}>C Pointers & Arrays</h1>
        <div className='explanation'>
        <div className='subheading'>
        <div style={{fontSize:"35px"}}> Array of Pointers</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Each element in the array is a pointer to a variable or an object of the type defined during declaration.</li></div>
             <div style={{fontSize: '20px'}}> <li>These pointers can point to data located anywhere in memory.</li></div>
            </div>    
        </div>
        </div>
        <div style={{fontSize:"20px",fontWeight:"600"}}>Example in Pointer and Array Operations</div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Explanation</div>   
        <div className='line-one'>
            <div style={{fontSize:"20px",fontWeight:"700"}}>1.Array Declaration and Initialization:</div>
             <div style={{fontSize: '20px'}}> <li>int numbers[3] = {'{10, 20, 30}'};</li></div> 
             <div style={{fontSize: '20px'}}> <li>This line creates an array numbers with three elements: 10, 20, and 30.</li></div> 
             <div style={{fontSize:"20px",fontWeight:"700"}}>2.Pointer Declaration:</div>
             <div style={{fontSize: '20px'}}> <li>int *ptr;</li></div> 
             <div style={{fontSize: '20px'}}> <li>Here, a pointer ptr is declared, which can point to an integer.</li></div> 
             <div style={{fontSize:"20px",fontWeight:"700"}}>3.Pointer Assignment:</div>
             <div style={{fontSize: '20px'}}> <li>ptr = numbers;</li></div> 
             <div style={{fontSize: '20px'}}> <li>The pointer ptr is assigned the address of the first element of the array numbers. Essentially, ptr now points to numbers[0].</li></div>  
            <div>
             <div style={{fontSize:"20px",fontWeight:"700"}}>4.Printing Original Array Elements Using the Pointer:</div>
             <div style={{fontSize: '20px'}}> <li>The loop:</li></div> 
             <div className='example' style={{height:"max-content"}}>
           <div className='code'>
               {'for(int i=0;i<3;i++)'}<br/>
               &ensp;&ensp;{'{'}<br/>
               &ensp;&ensp; printf("Element %d: %d\n", i,*(ptr + i));<br/>
               &ensp;&ensp; {'}'}
                </div>
                 </div>
                 <div style={{fontSize: '20px'}}> <li>This loop uses pointer arithmetic to access each element in the array and print its value.</li></div> 
                 </div>
                 <div>
                 <div style={{fontSize:"20px",fontWeight:"700"}}>5.Modifying Array Elements Using the Pointer:</div>
             <div style={{fontSize: '20px'}}> <li>The loop:</li></div> 
             <div className='example' style={{height:"max-content"}}>
           <div className='code'>
               {'for(int i=0;i<3;i++)'}<br/>
               &ensp;&ensp; {'{'}<br/>
               &ensp;&ensp; *(ptr + i) = *(ptr + i) + 5;<br/>
               &ensp;&ensp; {'}'}
                </div>
                 </div>
                 <div style={{fontSize: '20px'}}><li>In this loop, each element of the array is incremented by 5 using the pointer. For example, the value at numbers[0] changes from 10 to 15, and so on.</li></div> 
           </div> 
           <div>
                 <div style={{fontSize:"20px",fontWeight:"700"}}>6.Printing Modified Array Elements:</div>
             <div style={{fontSize: '20px'}}> <li>The loop:</li></div> 
             <div className='example' style={{height:"max-content"}}>
           <div className='code'>
               {'for(int i=0;i<3;i++)'}<br/>
               &ensp;&ensp; {'{'}<br/>
               &ensp;&ensp; printf("Element %d: %d\n", i, *(ptr + i));<br/>
               &ensp;&ensp; {'}'}
                </div>
                 </div>
                 <div style={{fontSize: '20px'}}><li>Finally, the modified values of the array elements are printed.</li></div> 
           </div> 
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

export default C_Pointers_arrays;