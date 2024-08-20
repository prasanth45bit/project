// Profile.js
import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext'; 
import './profile.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { user, setUser } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile-card">
          <div className="profile-header">
            <img className="profile-picture" src={user.picture} alt={user.name} />
            <h2 className="profile-name">{user.name}</h2>
          </div>
          <div className="profile-actions">
            <button className="Logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
