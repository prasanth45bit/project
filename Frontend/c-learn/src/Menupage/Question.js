import Gobutton from "./Gobutton";
import './All.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Question = ({contentId}) => {
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchQuestions = async () => {
          try {
            const response = await axios.get(`http://localhost:8081/questions/${contentId}`);
            setQuestions(response.data);
          } catch (err) {
            setError('Error fetching questions');
          } 
        };
    
        fetchQuestions();
      }, [contentId]);


    return (
      <div className='question-table'>
      <h2>Questions for Content ID {contentId}</h2>
      <table>
        <tr>
          <th>Question no</th>
          <th>Question </th>
          <th>Question submit</th>
        </tr>
        {questions.map((question) => (
          <tr key={question.question_id}>
            <td>{question.question_id}</td>
            <td>{question.question}</td>
            <td ><Gobutton question_id={question.question_id} content_id={contentId} /></td>
          </tr>
        ))}
      </table>
    </div>
    );
  };


  export default Question;



