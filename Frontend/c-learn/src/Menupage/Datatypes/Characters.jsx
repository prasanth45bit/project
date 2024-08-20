import React from 'react'
import '../All.css'
import Prebutton from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example'


const C_Datatypes_characters = ({ contentId }) => {

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
        <h1 style={{ fontSize:"40px"}}>C Character Data Types</h1>
        <div className='subheading'>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>The char Type</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>The char data type is used to store a single character.</li></div>
          <div style={{fontSize: '20px'}}> <li>The character must be surrounded by single quotes, like 'A' or 'c', and we use the %c format specifier to print it:

</li></div>
            </div>    
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

        <div className='explanation'>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}>Alternatively, if you are familiar with ASCII, you can use ASCII values to display certain characters. Note that these values are not surrounded by quotes (''), as they are numbers:</div>
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

            <div className='explanation'>
            <div style={{fontSize:"35px"}}> Notes on Characters</div>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}><li>If you try to store more than a single character, it will only print the last character:</li></div>
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

    <div className='explanation'>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}><li>To store multiple characters (or whole words), use strings (which you will learn more about in a later chapter):</li></div>
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
      </div>
    </div>
  )
}

export default C_Datatypes_characters;