import React from 'react'
import '../All.css'
import Prebutton from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';
import Exercise from '../Exercise';


const C_Variables_formatspecifier = ({ contentId }) => {

  const { setUser } = useContext(AuthContext);
  const [program] = useState('Loops');
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
    handleProgram({ program: 'Loops' });
  }, []);
  return (
    <div className='heading'>
      <div style={{width:'96%',height:'100%',padding:'0 2%'}} >
          <div className='explanation'>
        <div style={{fontSize:"35px",fontWeight:"500"}}>Format Specifiers</div>
        <div className='subheading'>
        <div className='line-one'>
        <div style={{fontSize: '20px'}}> <li>Format specifiers are used together with the printf() function to tell the compiler what type of data the variable is storing. It is basically a placeholder for the variable value.Format specifiers are used together with the printf() function to tell the compiler what type of data the variable is storing. It is basically a placeholder for the variable value.</li></div>
          <div style={{fontSize: '20px'}}> <li>A format specifier starts with a percentage sign %, followed by a character.</li></div>
          <div style={{fontSize: '20px'}}> <li>For example, to output the value of an int variable, use the format specifier %d surrounded by double quotes (""), inside the printf() function:</li></div>
         </div>
         </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

            <div className='explanation'>
            <div style={{fontSize:"35px"}}>Common Format Specifiers:</div>
            <div className='line-one'>
                <div style={{fontSize: '20px'}}><li><span style={{fontWeight:"600"}}>%d</span>or<span style={{color:"black",fontWeight:"600"}}>%i</span>: Integer (<span style={{color:"black",fontWeight:"600"}}>int</span>)</li></div>
                <div style={{fontSize: '20px'}}><li><span style={{color:"black",fontWeight:"600"}}>%f:</span> Floating-point number  (<span style={{color:"black",fontWeight:"600"}}>float</span>)</li></div>
                <div style={{fontSize: '20px'}}><li><span style={{color:"black",fontWeight:"600"}}>%lf:</span>Double-precision floating-point number(<span style={{color:"black",fontWeight:"600"}}>double</span>)</li></div>
                <div style={{fontSize: '20px'}}><li><span style={{color:"black",fontWeight:"600"}}>%c:</span>Single character(<span style={{color:"black",fontWeight:"600"}}>char</span>)</li></div>
                <div style={{fontSize: '20px'}}><li><span style={{color:"black",fontWeight:"600"}}>%s:</span> String (<span style={{color:"black",fontWeight:"600"}}>array of characters</span>)</li></div>
                <div style={{fontSize: '20px'}}><li><span style={{color:"black",fontWeight:"600"}}>%x:</span> Hexadecimal format for integers</li></div>
                <div style={{fontSize: '20px'}}><li><span style={{color:"black",fontWeight:"600"}}>%o:</span> Octal format for integers </li></div>
                <div>To print use this  types,</div>
           
               </div>
          </div>
          <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

            <div className='explanation'>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}>To print different types in a single printf() function, you can use the following:</div>
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

            <div className='explanation'>
          <div  style={{fontSize: "210%"}}>Print Values Without Variables</div>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}>You can also just print a value without storing it in a variable, as long as you use the correct format specifier:</div>
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <Exercise contentId={contentId}/>
      </div>
    </div>
  )
}

export default C_Variables_formatspecifier;