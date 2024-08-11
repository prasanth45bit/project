import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import '../pages/Exercise.css';
import Submit from '../Menupage/Submit';
import Finish from '../Menupage/Finish';
import { AuthContext } from '../AuthContext';

const ExerciseList = ({ contentId = 1 }) => {
  const [exercises, setExercises] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const [results, setResults] = useState({});
  const [allCorrect, setAllCorrect] = useState(false);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    if (contentId) {
      axios
        .get(`http://localhost:8081/exercises/${contentId}`)
        .then((response) => setExercises(response.data))
        .catch((error) => console.error(error));
    }
  }, [contentId]);

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
    axios
      .post(`http://localhost:8081/checkAnswer`, {
        exerciseId,
        answers,
      })
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
      .catch((error) => console.error(error));
  };

  const handleFinish = () => {
    if (user && user.userid) {
      axios.post('http://localhost:8081/updateUserLevel', { userid: user.userid, level: user.level + 1 })
        .then(response => {
          const newLevel = response.data.newLevel;
          setUser({ ...user, level: newLevel });
          console.log(newLevel)
        })
        .catch(error => {
          console.error('Error updating user level:', error);
        });
    }
  };

  return (
    <div className="exercise-list" style={{ width: '96%', height: '100%', padding: '0 2%' }}>
      <h2>hiii</h2>
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
      {allCorrect && (
        <div onClick={handleFinish}>
          <Finish  />
        </div>
      )}
    </div>
  );
};

export default ExerciseList;
