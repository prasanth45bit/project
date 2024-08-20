import Submit from "./Submit";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Exercise = ({contentId }) => {

  const [program] = useState('1');
  const [exerciseCode, setExerciseCode] = useState(''); 

  const fetchExercises = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/exercises/${contentId}/${program}`); 
      
      if (response.data && response.data.length > 0) {
        setExerciseCode(response.data[0].question_text);
      } else {
        setExerciseCode(''); 
      }
    } catch (error) {
      console.error('Error fetching exercises:', error);
      setExerciseCode('');
    }
  };
  


  useEffect(() => {
    fetchExercises();
  }, []);


    return (
        <div className='exercise'>
        <div  style={{fontSize: "170%"}}>Exercise</div>
        <div className='codeexer'>
          <pre>{exerciseCode}</pre>
        </div>
        <Submit onSelected={contentId}/>
      </div>  
    );
  };


  export default Exercise;



