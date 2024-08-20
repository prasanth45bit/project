import React from 'react';
import './All.css';
import Previous from './Previous';
import Next from './Next';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import Example from './Example';
import Exercise from './Exercise';

const C_Structures = ({contentId}) => {
 
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
        <h1 style={{ fontSize:"40px"}}>C Structures</h1>
        
        <div className='explanation'>
          <div className='subheading'>
            <div style={{fontSize:"35px"}}>Understanding Structures in C</div>   
            <div className='line-one'>
              <div style={{fontSize: '20px'}}> <li>A structure in C is a user-defined data type that groups related variables of different data types.</li></div>
              <div style={{fontSize: '20px'}}> <li>Structures are useful for organizing data in a more readable and manageable format.</li></div>
              <div style={{fontSize: '20px'}}> <li>Each variable within a structure is called a member, and each member can be of different data types.</li></div>
            </div>    
          </div>
        </div>
        
        <div style={{fontSize:"20px",fontWeight:"600"}}>Example of a Structure Definition and Usage</div>
        
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Explanation</div>   
          <div className='line-one'>
            <div style={{fontSize:"20px",fontWeight:"700"}}>1. Structure Definition:</div>
            <div style={{fontSize: '20px'}}> <li><code>struct Person{'{ char name [50]; int age; }'};</code> - This defines a structure named <code>Person</code> with two members: <code>name</code> (a character array) and <code>age</code> (an integer).</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>2. Structure Initialization:</div>
            <div style={{fontSize: '20px'}}> <li><code>struct Person person1 = {'{"Alice", 30}'}';</code> - This creates an instance of the <code>Person</code> structure and initializes it with a name and age.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>3. Function to Display Details:</div>
            <div style={{fontSize: '20px'}}> <li><code>void displayPerson(struct Person p)</code> - This function takes a <code>Person</code> structure as an argument and prints its members.</li></div>  
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>4. Function Call:</div>
            <div style={{fontSize: '20px'}}> <li><code>displayPerson(person1);</code> - This calls the function to display the details of <code>person1</code>.</li></div>  
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>5. Output:</div>
            <div style={{fontSize: '20px'}}> <li>The program prints: <code>Name: Alice</code> and <code>Age: 30</code>, showing the details of the <code>Person</code> structure.</li></div> 
          </div>
        </div>

        <div style={{fontSize:"20px",fontWeight:"600"}}>Example of a Structure with Nested Structures</div>
        
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
          <div style={{fontSize:"35px"}}>Explanation</div>   
          <div className='line-one'>
            <div style={{fontSize:"20px",fontWeight:"700"}}>1. Nested Structure Definition:</div>
            <div style={{fontSize: '20px'}}> <li><code>struct Date {'{ int day ; int month; int year; }'}';</code> - This defines a structure named <code>Date</code> to represent a date.</li></div> 
            <div style={{fontSize: '20px'}}> <li><code>struct Event {'{ char name[50]; struct Date date; }'};</code> - This defines a structure named <code>Event</code> that includes a <code>Date</code> structure as a member.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>2. Structure Initialization:</div>
            <div style={{fontSize: '20px'}}> <li><code>struct Event event1 = {'{"Conference", {15, 8, 2024}}'}';</code> - This creates an instance of the <code>Event</code> structure, initializing it with a name and a nested <code>Date</code> structure.</li></div> 
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>3. Function to Display Event Details:</div>
            <div style={{fontSize: '20px'}}> <li><code>void displayEvent(struct Event e)</code> - This function takes an <code>Event</code> structure and prints its details, including the nested <code>Date</code> structure.</li></div>  
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>4. Function Call:</div>
            <div style={{fontSize: '20px'}}> <li><code>displayEvent(event1);</code> - This calls the function to display the details of <code>event1</code>.</li></div>  
             
            <div style={{fontSize:"20px",fontWeight:"700"}}>5. Output:</div>
            <div style={{fontSize: '20px'}}> <li>The program prints: <code>Event: Conference</code> and <code>Date: 15/08/2024</code>, showing the details of the <code>Event</code> structure including the nested date.</li></div> 
          </div>
        </div>
        <Exercise contentId={contentId}/>
        <div className="buttons">
          <Previous contentId={contentId} />
          <Next contentId={contentId} />
        </div>
        </div>
    </div>
  )
}

export default C_Structures;

