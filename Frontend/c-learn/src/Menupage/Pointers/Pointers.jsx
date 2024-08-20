import React from 'react'
import '../All.css'
import Prebutton from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext';
import axios from 'axios';
import Example from '../Example'
import Exercise from '../Exercise';


const C_Pointers= ({contentId}) => {

   
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
        <h1 style={{ fontSize:"40px"}}>C Pointers</h1>
        <div className='explanation'>
        <div className='subheading'>
        <div style={{fontSize:"35px"}}>Creating Pointers</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>You learned from the previous chapter, that we can get the memory address of a variable with the reference operator &:</li></div>
            </div>    
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code}/>
        <div style={{fontSize: "21px"}}>A pointer is a variable that stores the memory address of another variable as its value.</div>
        <div style={{fontSize: "21px"}}>A pointer variable points to a data type (like int) of the same type, and is created with the * operator.</div>
        <div style={{fontSize: "21px"}}>The address of the variable you are working with is assigned to the pointer:</div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code}/>

            <div className='explanation'>
            <div style={{fontSize:"35px"}}> Example explained</div>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}><li>Create a pointer variable with the name ptr, that points to an int variable (myAge). Note that the type of the pointer has to match the type of the variable you're working with (int in our example).</li></div>
        <div style={{fontSize: "21px"}}><li>Use the & operator to store the memory address of the myAge variable, and assign it to the pointer.Use the & operator to store the memory address of the myAge variable, and assign it to the pointer.</li></div>
        <div style={{fontSize: "21px"}}><li>Now, ptr holds the value of myAge's memory address.</li></div>
        </div>
        </div>
        <div className='explanation'>
            <div style={{fontSize:"35px"}}>Dereference</div>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}><li>In the example above, we used the pointer variable to get the memory address of a variable (used together with the & reference operator).</li></div>
        <div style={{fontSize: "21px"}}><li>You can also get the value of the variable the pointer points to, by using the * operator (the dereference operator):</li></div>
         </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code}/>

    <div style={{fontSize:"20px"
            }}>
              <div style={{fontSize: "21px"}}>Note that the * sign can be confusing here, as it does two different things in our code:</div>
              <div style={{fontSize: "21px"}}><li>When used in declaration (int* ptr), it creates a pointer variable.</li></div>
              <div style={{fontSize: "21px"}}><li>When not used in declaration, it act as a dereference operator.</li></div>
              <div style={{fontSize: "21px"}}>Good To Know: There are two ways to declare pointer variables in C:</div>   
              </div>
            <div className='example' style={{height:"max-content"}}>
           <div className='code'>
                int* myNum;
                int *myNum;
                </div>
                 </div>
                 <div style={{fontSize:"20px"
            }}>
                 <div style={{fontSize:"21px",fontWeight:"600"}}>Notes on POinters</div>
                 <div style={{fontSize: "21px"}}><li>Pointers are one of the things that make C stand out from other programming languages, like Python and Java.</li></div>
              <div style={{fontSize: "21px"}}><li>They are important in C, because they allow us to manipulate the data in the computer's memory. This can reduce the code and improve the performance. If you are familiar with data structures like lists, trees and graphs, you should know that pointers are especially useful for implementing those. And sometimes you even have to use pointers, for example when working with files and memory management.</li></div>
              <div style={{fontSize: "21px"}}>But be careful; pointers must be handled with care, since it is possible to damage data stored in other memory addresses.</div>   
            </div>  
           <Exercise contentId={contentId} />
          <div className="buttons"><Prebutton /><Next/></div>
      </div>
    </div>
  )
}

export default C_Pointers;