import React from 'react'
import '../All.css'
import Prebutton from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Exercise from '../Exercise';


export const C_Datatypes = ({ contentId }) => {

  const { setUser } = useContext(AuthContext);
  const [program] = useState('Datatypes');
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
    handleProgram({ program: 'Datatypes' });
  }, []);

  return (
    <div className='heading'>
      <div style={{width:'96%',height:'100%',padding:'0 2%'}} >
        <h1 style={{ fontSize:"40px"}}>C Datatypes</h1>
        <div className="subheading">
        <div style={{fontSize:"35px"}}>Data Type</div>
       <div className='explanation'>
       
        <div className='line-one'>
     <div style={{fontSize: "21px"}}>As explained in the Variables chapter, a variable in C must be a specified data type, and you must use a format specifier inside the printf() function to display it:</div>
           </div>    
        </div>
        </div>

        <div className='explanation'>
       <div style={{fontSize:"35px"}}>Basic Data Types</div>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}><li>The data type specifies the size and type of information the variable will store.</li></div>
        <div style={{fontSize: "21px"}}><li>In this tutorial, we will focus on the most basic ones:</li></div>
               </div>    
        </div>

        <div>
          <table className='data-table'>
            <tr>
              <th>Data Type</th>
              <th>Size</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
            <tr>
              <td>int</td>
              <td>2 or 4 bytes</td>
              <td>Stores whole numbers, without decimals</td>
              <td>1</td>
            </tr>
            <tr >
              <td>float</td>
              <td>4 bytes</td>
              <td>Stores fractional numbers, containing one or more decimals. Sufficient for storing 6-7 decimal digits</td>
              <td>1.99</td>
            </tr>
            <tr >
              <td>double</td>
              <td>8 bytes</td>
              <td>Stores fractional numbers, containing one or more decimals. Sufficient for storing 15 decimal digits</td>
              <td>1.99</td>
            </tr>
            <tr >
              <td>char</td>
              <td>1 byte</td>
              <td>	Stores a single character/letter/number, or ASCII values</td>
              <td>'A'</td>
            </tr>
          </table>
        </div>
        <div>
        <div className='explanation'>
       <div style={{fontSize:"35px"}}>Basic Format Specifiers</div>
        <div className='line-one'>
       <div style={{fontSize: "21px"}}><li>There are different format specifiers for each data type. Here are some of them:</li></div>
               </div>    
        </div>
        <table className='question-table'>
            <tr>
              <th>Format Specifier</th>
              <th>Description</th>
              <th>Example</th>
              <th>Question</th>
            </tr>
            <tr>
              <td>%d or %i</td>
              <td>Used for signed integers.%d and `%i`are interchangeable</td>
              <td>
              <pre>
              int num = 42;<br/>
              printf("The integer is: %d\n", num);</pre></td>
              <td> How would you print the value of an integer variable age using a format specifier?</td>
            </tr>
            <tr >
              <td>%c</td>
              <td>Used to print a single character.</td>
              <td><pre>
              char letter = 'A';<br/>
              printf("The character is: %c\n", letter);</pre></td>
              <td>If you have a char variable named grade, which format specifier would you use to display its value?</td>
            </tr>
            <tr >
              <td>%f</td>
              <td>Used for floating-point numbers (single precision).</td>
              <td>float pi = 3.14;<br/>
              printf("The value of pi is: %f\n", pi);</td>
              <td> How would you format a float variable named temperature to display its value</td>
            </tr>
            <tr >
              <td>lf</td>
              <td>Used for double-precision floating-point numbers</td>
              <td>double distance = 1234.56789;<br/>
              printf("The distance is: %lf\n", distance); </td>
              <td> Which format specifier would you use to print a double variable named salary?</td>
            </tr>
            <tr >
              <td>` %s`</td>
              <td> Used to print a string (array of characters)</td>
              <td>char name[] = "John";<br/>
              printf("The name is: %s\n", name);</td>
              <td> : How do you print the contents of a char array message using the correct format specifier?</td>
            </tr>
          </table>
        </div>
        <Exercise contentId={contentId}/>
      </div>
    </div>
  )
}

export default C_Datatypes;