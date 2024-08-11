import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import './Login.css';
import { IoMdContact } from "react-icons/io";
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';  // Ensure correct import
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const { setUser } = useContext(AuthContext);
  const [userid, setUserid] = useState('');
  const [passwor, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Handle form submit for regular login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/login', {
        userid,
        passwor,
      });

      console.log('Login response:', response.data); // Debugging

      if (response.data.length > 0) {
        const userData = { userid }; // Expand with more user data if needed
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('lastActivityTime', Date.now().toString());

        navigate('/home');
      } else {
        setMessage('Wrong email/password combination!');
      }
    } catch (error) {
      setMessage('Error occurred during login');
      console.error('Login error:', error); // Debugging
    }
  };

  // Handle Google Login
  const handleGoogleSuccess = (credentialResponse) => {
    try {
      const decodedToken = jwtDecode(credentialResponse.credential);
      console.log('Google Token Decoded:', decodedToken); // Debugging

      const userData = {
        userid: decodedToken.email,
        name: decodedToken.name,
        picture: decodedToken.picture,
      };

      // Call your backend to verify and store Google user
      handleSubmitGoogle(userData);
    } catch (error) {
      setMessage('Failed to decode Google token');
      console.error('Google token decode error:', error); // Debugging
    }
  };

  // Handle Google Login submission to backend
  const handleSubmitGoogle = async (userData) => {
    try {
      const response = await axios.post('http://localhost:8081/googlelogin', {
        userid: userData.userid,
      });

      console.log('Google login response:', response.data); // Debugging

      if (response.data.length > 0) {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('lastActivityTime', Date.now().toString());

        navigate('/home');
      } else {
        setMessage('Google login failed!');
      }
    } catch (error) {
      setMessage('Error occurred during Google login');
      console.error('Google login error:', error); // Debugging
    }
  };

  return (
    <div className='mainpage'>
      <div className='login'>
        <GoogleOAuthProvider clientId="652607361189-a1sjfgmu6bo08gofaimm3vuceab0g7qh.apps.googleusercontent.com">
          <div className='page'>
            <div className='loginicon'>
              <IoMdContact />
              <h1 style={{ color: "WHITE", fontSize: "30PX" }}>LOGiN</h1>
            </div>
          </div>
          <form className='loginpage' onSubmit={handleSubmit}>
            <input
              style={{ width: "45%", padding: '0% 5%', height: "8%", borderRadius: "10px" }}
              type='text'
              placeholder='Username'
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
              required
            />
            <input
              style={{ width: "45%", padding: '0% 5%', height: "8%", borderRadius: "10px" }}
              type='password'
              placeholder='Password'
              value={passwor}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              style={{ height: "10%", width: "30%", backgroundColor: "blue", borderRadius: "10px", fontSize: "120%", fontWeight: "600", color: "white" }}
              type="submit"
            >
              LOGIN
            </button>
            <p>Sign in with your BITSathy Account</p>
            <GoogleLogin
              className="googlebutton"
              onSuccess={handleGoogleSuccess}
              onError={() => {
                setMessage('Google login failed!');
                console.log('Google Login Failed'); // Debugging
              }}
            />
            {message && <p>{message}</p>}
          </form>
        </GoogleOAuthProvider>
      </div>
    </div>
  );
}

export default Loginpage;
