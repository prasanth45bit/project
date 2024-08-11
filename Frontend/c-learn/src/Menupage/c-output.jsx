import Trybutton from './Trybutton'
import Prebutton from './Previous'
import Next from './Next'
import React, { useContext, useState, useEffect } from 'react';
import './All.css';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const C_Output = () => {
  const { setUser } = useContext(AuthContext);
  const [program] = useState('Introduction');
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
        <div style={{width:'96%',height:'100%',padding:'0 2%'}} >
        <h1 style={{ fontSize:"40px"
        }}>C Output</h1>
            <div className='subheading'>
        <div style={{fontSize:"40px"}}>Output</div>
        <div style={{fontSize: "21px"}}>To output values or print text in C, you can use the printf() function:</div>
         </div>
         <div className='example'>
                <div  style={{fontSize: "210%"}}>Example</div>
                <div className='firstcode'>
                <div style={{backgroundColor:"green",width:"0.2%",height:"100%"}}>
                </div>
                <div className='code'>
                    <pre>{code}</pre>
                </div>
                </div> 
                <Trybutton/>
            </div>

            <div className='explanation'>
            <div style={{fontSize:"35px"}}>Double Quotes</div>
            <div className='line-one'>
            <div style={{fontSize: '20px'}}> <li> When you are working with text, it must be wrapped inside double quotations marks <span style={{color:"red",fontWeight:"700"}}> " " </span>.</li></div>
            <div style={{fontSize: '20px'}}> <li>If you forget the double quotes, an error occurs:</li></div>
            </div>
            </div>
            <div className='example'>
                <div  style={{fontSize: "210%"}}>Example</div>
                <div className='firstcode'>
                <div style={{backgroundColor:"green",width:"0.2%",height:"100%"}}>
                </div>
                <div className='code'>
                    <pre>{code}</pre>
                </div>
                </div> 
                <Trybutton/>
            </div>
            <div className='explanation'>
            <div style={{fontSize:"35px"}}>Many printf Functions</div>
            <div className='line-one'>
            <div style={{fontSize: '20px'}}> <li> You can use as many<span style={{color:"red",fontWeight:"700"}}> printf()</span> functions as you want. However, note that it does not insert a new line at the end of the output  .</li></div>
            </div>
            </div>
            <div className='example'>
                <div  style={{fontSize: "210%"}}>Example</div>
                <div className='firstcode'>
                <div style={{backgroundColor:"green",width:"0.2%",height:"100%"}}>
                </div>
                <div className='code'>
                   <pre>{code}</pre> 
                </div>
                </div> 
                <Trybutton/>
                <div className='example-explain'>
          <div>Click on the "Try it Yourself" button to see how it works.</div>
          <div>We recommend reading this tutorial, in the sequence listed in the left menu.</div>
        </div>
            </div>
            <div className="buttons">
          <Prebutton />
          <Next />
        </div>
        </div>
    </div>
  )
}


export default C_Output