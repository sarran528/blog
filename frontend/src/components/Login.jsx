import React, { useState } from 'react';
import "../styles/Login.css";

const Login = ({ onLogin, switchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      if (response.ok) {
        const data = await response.json();
        window.alert("Login successful");
        // Optionally pass additional backend data (e.g. a token) to onLogin if needed
        onLogin(username, data.token);
      } else {
        window.alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      window.alert("Error logging in.");
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