import React from 'react'
import '../All.css'
import Prebutton from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';
import Exercise from '../Exercise';

const C_String = (contentId) => {

  
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
        <h1 style={{ fontSize:"40px"}}>C Strings
        </h1>
        <div className='explanation'>
        <div className='subheading'>
        <div style={{fontSize:"35px"}}>Strings</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Strings are used for storing text/characters.</li></div>
             <div style={{fontSize: '20px'}}> <li>For example, "Hello World" is a string of characters.</li></div>
             <div style={{fontSize: '20px'}}> <li>Unlike many other programming languages, C does not have a String type to easily create string variables. Instead, you must use the char type and create an array of characters to make a string in C:</li></div>
           </div>    
        </div>
        <div className='example'>
                <div className='firstcode'>
                <div className='code'>
                char greetings[] = "Hello World!";
                </div>
                </div>  
                 </div>
        </div>
     <div className='explanation'>  
        <div className='line-one'>
        <div style={{fontSize:"20px"}}><li>Note that you have to use double quotes ("").</li></div>   
        <div style={{fontSize:"20px"}}><li>To output the string, you can use the printf() function together with the format specifier %s to tell C that we are now working with strings:</li></div>   
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} /> 
             <div style={{fontSize: '20px'}}> <li>Note that we have to use the %c format specifier to print a single character.
</li></div>
           </div>    
        </div>
        <div className='explanation'>
        <div style={{fontSize:"30px"}}>Modify Strings</div>  
        <div className='line-one'>
        <div style={{fontSize: '20px'}}><li>To change the value of a specific character in a string, refer to the index number, and use single quotes:</li></div>
                 </div>
             </div>    
             <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} /> 
        <div className='explanation'>
        <div style={{fontSize:"30px"}}>Loop Through a String </div>  
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>You can also loop through the characters of a string, using a for loop:</li></div>
           </div>    
        </div>
     <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} /> 
      <div style={{fontSize:"20px"}}>And like we specified in the arrays chapter, you can also use the sizeof formula (instead of manually write the size of the array in the loop condition (i {'<'} 5)) to make the loop more sustainable:</div>
      <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} /> 
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Another Way Of Creating Strings</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>In the examples above, we used a "string literal" to create a string variable. This is the easiest way to create a string in C.</li></div>
             <div style={{fontSize: '20px'}}> <li>You should also note that you can create a string with a set of characters. This example will produce the same result as the example in the beginning of this page:</li></div>
           </div>    
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} /> 
             <div style={{fontSize:"20px",backgroundColor:'yellow',height:"10%",marginTop:"1%",display:"flex",alignItems:"center",}}> <li><b>Why do we include the \0 character at the end?</b> This is known as the "null terminating character", and must be included when creating strings using this method. It tells C that this is the end of the string.</li></div>
        <div className='explanation'>
        <div style={{fontSize:"35px"}}>Differences</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>The difference between the two ways of creating strings, is that the first method is easier to write, and you do not have to include the \0 character, as C will do it for you.</li></div>
             <div style={{fontSize: '20px'}}> <li>You should note that the size of both arrays is the same: They both have 13 characters (space also counts as a character by the way), including the \0 character:</li></div>
          </div> 
                 </div>
                 <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} /> 
         <div className='explanation'>
        <div style={{fontSize:"35px"}}>Real-Life Example</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Use strings to create a simple welcome message:</li></div>
          </div> 
                 </div>
                 <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />  
                 <Exercise contentId={contentId}/>
      </div>
    </div>
  )
}
export default C_String;