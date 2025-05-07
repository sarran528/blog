import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Login.css";

const Login = ({ onLogin, switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      window.alert("Login successful");
      onLogin(username, response.data.token); // This should update state in App.jsx to show the Blog page
    } catch (error) {
      if (error.response && error.response.status === 401) {
        window.alert("Invalid credentials");
      } else {
        console.error("Error logging in:", error);
        window.alert("Error logging in.");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input 
            type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label>Password: </label>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={switchToSignup}>Sign Up</button>
    </div>
  );
};

export default Login;