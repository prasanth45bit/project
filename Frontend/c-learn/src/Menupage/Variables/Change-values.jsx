import React from 'react'
import '../All.css'
import Prebutton from '../Previous'
import Next from '../Next'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../AuthContext'
import axios from 'axios';
import Example from '../Example';
import Exercise from '../Exercise'


 const C_Variables_change_values = ({ contentId }) => {
  
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setUser } = useContext(AuthContext);
  const [program] = useState('Syntax');
  const [message, setMessage] = useState('');
  const [code, setCode] = useState(''); 


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/questions/${contentId}`);
        setQuestions(response.data);
      } catch (err) {
        setError('Error fetching questions');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [contentId]);

  

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
      <h1 style={{ fontSize:"40px"}}>C variable values</h1>
      <div className='subheading'>
            <div className='explanation'>
           
          <div  style={{fontSize: "210%"}}>Change Variable Values</div>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}>If you assign a new value to an existing variable, it will overwrite the previous value:</div>
        </div>
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

    <div style={{fontSize:"20px",padding:"2%"}}>You can also assign the value of one variable to another Or copy values to empty variables:</div>
    <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />

    <div className='explanation'>
          <div  style={{fontSize: "210%"}}>Add Variables Together</div>
        <div className='line-one'>
        <div style={{fontSize: "21px"}}>To add a variable to another variable, you can use the + operator:</div>
        </div>
        </div>
        <Example fontSize="210%" bgColor="green" barWidth="0.2%" code={code} />
        <Exercise contentId={contentId}/>
      </div>
    </div>
  )
}

export default C_Variables_change_values;