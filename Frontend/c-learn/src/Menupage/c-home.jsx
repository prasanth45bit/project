import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import './All.css';
import Trybutton from './Trybutton';
import Next from './Next';
import axios from 'axios';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Submit from './Submit';

function C_Home() {
  const { setUser } = useContext(AuthContext);
  const [program] = useState('1');
  const [message, setMessage] = useState('');
  const [code, setCode] = useState('');
  const [exerciseCode, setExerciseCode] = useState(''); 

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


  const fetchExercises = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/exercises/${program}`); 
      if (response.data && response.data.length > 0) {
        setExerciseCode(response.data[0].question_text);
      }
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  useEffect(() => {
    handleProgram({ program: 'Loops' });
    fetchExercises();
  }, []);

  return (
    <div className='heading'>
      <div style={{width:'96%',height:'100%',padding:'0 2%'}}>
      <h1 style={{ fontSize:"40px"}}>C Home</h1>
        <div className='subheading'>
          <div style={{fontSize: "210%"}}>Learn C</div>
          <div>
            <div style={{fontSize: "150%",marginBottom:'10px'}}>C is a general-purpose programming language that has been widely used for over 50 years.</div>
            <div style={{fontSize: "150%"}}>C is very powerful; it has been used to develop operating systems, databases, applications, etc.</div>
          </div>
        </div>
        <div className='explanation'>
          <div style={{fontSize: "210%",padding:'5px'}}>Examples in Each Chapter</div>
          <div className='line-one'>
          <li>Our "Try it Yourself" editor makes it easy to learn C.</li>
            <li>You can edit code and view the result in your browser:</li>
          </div>
        </div>
        <div className='example'>
          <div style={{fontSize: "210%"}}>Example</div>
          <div className='firstcode'>
            <div style={{backgroundColor:"green",width:"0.2%",height:"100%"}}></div>
            <div className='code'>
              <pre>{code} </pre>        
            </div>
          </div> 
          <Trybutton/>
        </div>
        <div className='example-explain'>
          <div>Click on the "Try it Yourself" button to see how it works.</div>
          <div>We recommend reading this tutorial, in the sequence listed in the left menu.</div>
        </div>
        <div className='example'>
          <div style={{fontSize: "210%"}}>Example</div>
          <div className='firstcode'>
            <div style={{backgroundColor:"green",width:"0.2%",height:"100%"}}></div>
            <div className='code'>
              <pre>{code} </pre>        
            </div>
          </div> 
          <Trybutton/>
        </div>
       <div style={{width:"100%",display:"flex",justifyContent:"end"}}>
        <Next/>
       </div>
      </div>
    </div>
  );
}

export default C_Home;
