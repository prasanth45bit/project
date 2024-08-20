import React, { useContext, useState, useEffect } from 'react';
import './All.css';
import Next from './Next';
import Previous from './Previous';
import { AuthContext } from '../AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import candcpp from '../Assets/ccppp.jpg';
import Exercise from './Exercise';


export const C_Introduction = ({ contentId }) => {
  

  const { setUser } = useContext(AuthContext);
  const [program] = useState('Introduction');
  const [message, setMessage] = useState('');
  const [code, setCode] = useState('');
  const [nextPath, setNextPath] = useState('');
  const [previousPath, setPreviousPath] = useState('');
  const navigate = useNavigate();



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
    handleProgram({ program: 'Introduction' });
  });


  

  return (
    <div className='heading'>
      <div style={{ width: '96%', height: '100%', padding: '0 2%' }}>
        <h1 style={{ fontSize: "40px" }}>C Introduction</h1>
        <div className="subheading">
          <div style={{ fontSize: "40px" }}>What is C ?</div>
          <div>
            <div style={{ fontSize: "150%", marginBottom: '10px' }}>C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.</div>
            <div style={{ fontSize: "150%", marginBottom: '10px' }}>It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.</div>
            <div style={{ fontSize: "150%", marginBottom: '10px' }}>C is strongly associated with UNIX, as it was developed to write the UNIX operating system.</div>
          </div>
        </div>
        <div className='explanation'>
          <div style={{ fontSize: "40px" }}>Why Learn C ?</div>
          <div className='line-one'>
            <li>It is one of the most popular programming languages in the world</li>
            <li>If you know C, you will have no problem learning other popular programming languages such as Java, Python, C++, C#, etc, as the syntax is similar</li>
            <li>C is very fast, compared to other programming languages, like{' '} <span style={{ color: 'blue' }}>Java</span> and{' '}<span style={{ color: 'blue' }}>Python</span></li>
            <li>C is very versatile; it can be used in both applications and technologies</li>
          </div>
        </div>
        <div className='difference'>
          <div style={{ fontSize: "40px" }}>Difference between C and C++</div>
          <div style={{ display: 'flex', width: '100%',alignItems:'center' }}>
            <div style={{ display: 'flex', width: '45%', height: '100%' }}>
              <img style={{width:'100%', justifyContent:'center'}} src={candcpp} />
            </div>
            <div className='c-cpp'>
              <div> <li>C++ was developed as an extension of C, and both languages have almost the same syntax</li></div>
              <div> <li>The main difference between C and C++ is that C++ support classes and objects, while C does not</li></div>
            </div>
          </div>
        </div>
        <Exercise contentId={contentId}/>
        <div className="buttons">
          <Previous contentId={contentId} />
          <Next contentId={contentId} />
        </div>
      </div>
    </div>
  );
};

export default C_Introduction;
