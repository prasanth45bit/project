import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const login = () => {
    axios.post('http://localhost:8081/login', {
      userid: email, 
      passwor: password, 
    })
    .then((response) => {
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        navigate('/Home', { state: { userData: response.data[0] } });
      }
    })
    .catch((error) => {
      console.error('There was an error logging in!', error);
      setLoginStatus('An error occurred. Please try again.');
    });
  };

  return (
    <div className="login">
      <div className='logincontainer'>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={login}>Login</button>
      <h5>If you don't have an account, please register using the link below.</h5>
      <h3>{loginStatus}</h3>
      </div>
    </div>
  );
}

export default Login;
