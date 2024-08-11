import React from 'react'
import './All.css'
import Trybutton from './Trybutton';
import Submit from './Submit'
import Prebutton from './Previous'
import Next from './Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import axios from 'axios';


export const C_Syntax = () => {
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
        <h1 style={{ fontSize:"40px"}}>C Syntax</h1>
        <div className='subheading'>
          <div style={{fontSize:"40px"}}>Syntax</div>
          <div style={{fontSize: "21px"}}>You have already seen the following code a couple of times in the first chapters. Let's break it down to understand it better:</div>
        </div>
        <div className='example'>
          <div  style={{fontSize: "210%"}}>Example</div>
          <div className='firstcode'>
            <div style={{backgroundColor:"green",width:"0.2%",height:"100%"}}></div>
            <div className='code'>
              <pre>{code}</pre>  
            </div>
          </div> 
          <Trybutton/>
            </div>
            <div className='example-explain'>
          <div>Click on the "Try it Yourself" button to see how it works.</div>
          <div>We recommend reading this tutorial, in the sequence listed in the left menu.</div>
        </div>
          <div className='explanation'>
            <div style={{fontSize:"35px"}}>Explaintion of Example</div>
            <div className='line-one'>
                <div style={{fontSize: '20px'}}> <li> <span style={{color:"black",fontWeight:"700"}}> #include {'<'}stdio.h{'>'} </span>: This is a preprocessor directive that tells the compiler to include the standard input-output library before compiling the program.</li></div>
                <div style={{fontSize: '20px'}}> <li><span style={{color:"black",fontWeight:"700"}}> int main() </span>: This is the main function where the execution of the program begins. Every C program must have a main function.</li></div>
                <div style={{fontSize: '20px'}}> <li> <span style={{color:"black",fontWeight:"700"}}>int number;</span>: This line declares an integer variable named number..</li></div>
                <div style={{fontSize: '20px'}}> <li><span style={{color:"black",fontWeight:"700"}}> printf("Enter an integer: "); </span>: This line prints the message "Enter an integer: " to the console.</li></div>
                <div style={{fontSize: '20px'}}> <li><span style={{color:"black",fontWeight:"700"}}> scanf("%d", &number); </span> : This line reads an integer from the user and stores it in the variable number. The %d is a format specifier for integers, and &number is the address of the variable where the input will be stored.</li></div>
                <div style={{fontSize: '20px'}}> <li><span style={{color:"black",fontWeight:"700"}}>printf("You entered: %d\n", number); </span>: This line prints the value of number back to the console. %d is replaced with the value of number.</li></div>
                <div style={{fontSize: '20px'}}> <li><span style={{color:"black",fontWeight:"700"}}>return 0; </span>: This statement terminates the main function and returns 0 to the operating system, indicating that the program ran successfully.</li></div>
            </div>
          </div>
          <div className='exercise'>
            <div  style={{fontSize: "170%"}}>Exercise</div>
            <div>Insert the missing part </div>
            <div className='codeexer'>
              <pre>{code}</pre>
            </div>
            <Submit />
          </div>
          <div className="buttons"><Prebutton /><Next/></div>
      </div>
    </div>
  )
}

export default C_Syntax;