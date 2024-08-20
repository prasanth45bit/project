import React from 'react'
import '../All.css'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';

const C_String_special_characters = ({contentId}) => {

   
   
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
        <h1 style={{ fontSize:"40px"}}>C Special Characters</h1>
        <div className='explanation'>
        <div className='subheading'>
        <div style={{fontSize:"35px"}}>Strings - Special Characters</div>   
        <div className='line-one'>
             <div style={{fontSize: '20px'}}> <li>Because strings must be written within quotes, C will misunderstand this string, and generate an error:</li></div>
          </div>    
        </div>
        <div className='example'>
                <div className='firstcode'>
                <div className='code'>
                char txt[] = "We are the so-called "Vikings" from the north.";
                </div>
                </div>  
                 </div>
        </div>  
        <div style={{fontSize:"20px"}}><li>The solution to avoid this problem, is to use the backslash escape character.</li></div>   
        <div style={{fontSize:"20px",marginTop:"1%"}}><li>The backslash (\) escape character turns special characters into string characters:</li></div>   
         <table className='question-table'>
            <tr>
              <th>Escape character</th>
              <th>Result</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>\'</td>
              <td>'</td>
              <td>Single quote</td>
            </tr>
            <tr >
              <td>\"</td>
              <td>"</td>
              <td>Double quote</td>
            </tr>
            <tr >
              <td>\\</td>
              <td>\</td>
              <td>Backslash</td>
            </tr>
          </table>  
          <div style={{fontSize:"20px",marginTop:"1%"}}>The sequence \"  inserts a double quote in a string:</div>
             <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code}/>
             <div style={{fontSize:"20px",marginTop:"1%"}}>The sequence \"  inserts a single quote in a string:</div>
             <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code}/>
             <div style={{fontSize:"20px",marginTop:"1%"}}>The sequence \"  inserts a single backslash in a string:</div>
             <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code}/>
             <div style={{fontSize:"20px",marginTop:"1%"}}>Other popular escape characters in C are:</div>
         <table className='question-table'>
            <tr>
              <th>Escape character</th>
              <th>Result</th>
              <th>Try it</th>
            </tr>
            <tr>
              <td>\n</td>
              <td>New line</td>
              <td>Try it</td>
            </tr>
            <tr >
              <td>\t"</td>
              <td>Tab</td>
              <td>Try it</td>
            </tr>
            <tr >
              <td>\0</td>
              <td>Null</td>
              <td>Try it</td>
            </tr>
          </table>
      </div>
    </div>
  )
}
export default C_String_special_characters;