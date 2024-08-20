import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../pages/Exercise.css';
import Submit from '../Menupage/Submit';
import Finish from '../Menupage/Finish';
import { AuthContext } from '../AuthContext';

const ExerciseList = ({ contentId }) => {
  const [exercises, setExercises] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [results, setResults] = useState({});
  const [level, setLevel] = useState();
  const [allCorrect, setAllCorrect] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const storedLevel = localStorage.getItem('level');
    if (storedLevel) {
      setLevel(parseInt(storedLevel, 10)); 
    }

    if (contentId && user) {
      console.log("user.level:", user.level);
      console.log("contentId:", contentId);
      axios.get(`http://localhost:8081/exercises/${contentId}`)
        .then((response) => setExercises(response.data))
        .catch((error) => console.error('Error fetching exercises:', error));
    }
  }, [contentId, user]);

  const handleInputChange = (exerciseId, inputIndex, event) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [exerciseId]: {
        ...prevValues[exerciseId],
        [inputIndex]: event.target.value,
      },
    }));
  };

  const handleSubmit = (exerciseId) => {
    const answers = inputValues[exerciseId] || {};
    axios.post('http://localhost:8081/checkAnswer', { exerciseId, answers })
      .then((response) => {
        const isCorrect = response.data.isCorrect;
        setResults((prevResults) => ({
          ...prevResults,
          [exerciseId]: isCorrect ? 'Correct' : 'Incorrect',
        }));

        if (isCorrect) {
          const allAnsweredCorrectly = exercises.every(
            (exercise) =>
              results[exercise.exercise_id] === 'Correct' || exercise.exercise_id === exerciseId
          );
          if (allAnsweredCorrectly) {
            setAllCorrect(true); 
          }
        }
      })
      .catch((error) => console.error('Error checking answer:', error));
  };

  const finishLevel = async () => {
    try {
      const userId = user.userid; 
      const level = parseInt(localStorage.getItem('level'), 10); 
      const contentLevel = contentId;  
  
      if (level < contentLevel) {
        const response = await fetch('http://localhost:8081/updatelevel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ level: contentLevel, userId }),
        });
  
        const result = await response.json();
        alert(result.message);
  
        if (result.message.includes("Level updated successfully")) {
          setLevel(contentLevel); 
          localStorage.setItem('level', contentLevel); 
        }
      } else {
        alert('You have already completed this level!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while updating the level.');
    }
  };

  console.log("allCorrect:", allCorrect);
  console.log("user.level:", level);
  console.log("contentId:", contentId);

  return (
    <div className="exercise-list" style={{ width: '96%', height: '100%', padding: '0 2%' }}>
      <h2>Exercises</h2>
      {user && <h2 className="profile-name">{user.name} - Level: {level}</h2>}
      {exercises.map((exercise) => (
        <div key={exercise.exercise_id}>
          <ul>
            <li>
              <div className="exercise">
                <div style={{ fontSize: '170%' }}>Exercise</div>
                <div>Insert the missing part</div>
                <div className="codeexer">
                  <pre style={{ whiteSpace: 'pre-wrap' }}>
                    {exercise.question_text.split('____').map((part, index) => (
                      <React.Fragment key={index}>
                        {part}
                        {index < exercise.question_text.split('____').length - 1 && (
                          <input
                            type="text"
                            maxLength={exercise.length || 2}
                            style={{
                              width: `${exercise.width || 20}px`,
                              display: 'inline-block',
                              verticalAlign: 'middle',
                            }}
                            value={
                              (inputValues[exercise.exercise_id] &&
                                inputValues[exercise.exercise_id][index]) ||
                              ''
                            }
                            onChange={(e) =>
                              handleInputChange(exercise.exercise_id, index, e)
                            }
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </pre>
                </div>
                <div onClick={() => handleSubmit(exercise.exercise_id)}>
                  <Submit />
                </div>
                {results[exercise.exercise_id] && (
                  <p>Result: {results[exercise.exercise_id]}</p>
                )}
              </div>
            </li>
          </ul>
        </div>
      ))}
      {allCorrect && (  // Show Finish button only when all exercises are correct
        <div onClick={finishLevel}>
          <Finish />
        </div>
      )}
    </div>
  );
};

export default ExerciseList;
