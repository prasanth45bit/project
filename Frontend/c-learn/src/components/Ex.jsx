import React, { useState } from 'react';
import Menubar from './Menubar';

const ExercisePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const correctValue = "42"; 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === correctValue) {
      setResultMessage('Correct Answer!');
    } else {
      setResultMessage('Incorrect Answer. Try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>C Programming Exercise</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your answer"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Check Answer</button>
      </form>
      <p style={styles.message}>{resultMessage}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '200px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#4caf50',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    fontSize: '18px',
  },
};

export default ExercisePage;
