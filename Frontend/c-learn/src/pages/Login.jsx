import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import './Login.css';
import { IoMdContact } from "react-icons/io";
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Loginpage() {
  const { setUser } = useContext(AuthContext);
  const [userid, setUserid] = useState('');
  const [passwor, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/login', { userid, passwor });
      if (response.data.length > 0) {
        const userData = { userid };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('lastActivityTime', Date.now().toString());
        navigate('/home');
      } else {
        setMessage('Wrong email/password combination!');
      }
    } catch (error) {
      setMessage('Error occurred during login');
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    try {
      const decodedToken = jwtDecode(credentialResponse.credential);
      const userData = {
        userid: decodedToken.email,
        name: decodedToken.name,
        picture: decodedToken.picture,
      };
      handleSubmitGoogle(userData);
    } catch (error) {
      setMessage('Failed to decode Google token');
    }
  };

  const handleSubmitGoogle = async (userData) => {
    try {
      const response = await axios.post('http://localhost:8081/googlelogin', { userid: userData.userid });
      if (response.data.length > 0) {
        userData.level = response.data[0].level; 
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('lastActivityTime', Date.now().toString());
        localStorage.setItem('level', response.data[0].level);
        navigate('/home');
      } else {
        setMessage('Google login failed!');
      }
    } catch (error) {
      setMessage('Error occurred during Google login');
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
