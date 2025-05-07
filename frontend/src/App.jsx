import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import BlogList from './components/BlogList';
import './App.css';

const App = () => {
  const [view, setView] = useState('login'); // 'login', 'signup', 'blog'
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    // Dummy authentication: username "user" and password "pass"
    if (username === 'user' && password === 'pass') {
      window.alert("Login successful");
      setUser({ username });
      setView('blog');
    } else {
      window.alert("Invalid credentials");
    }
  };

  const handleSignup = (username, password) => {
    // Dummy signup: accept credentials and log in the user
    window.alert("Signup successful");
    setUser({ username });
    setView('blog');
  };

  const handleLogout = () => {
    setUser(null);
    setView('login');
  };

  return (
    <div className="App">
      <h1>Blog Application</h1>
      {view === 'login' && (
        <Login 
          onLogin={handleLogin} 
          switchToSignup={() => setView('signup')}
        />
      )}
      {view === 'signup' && (
        <Signup 
          onSignup={handleSignup} 
          switchToLogin={() => setView('login')}
        />
      )}
      {view === 'blog' && (
        <BlogList user={user} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
