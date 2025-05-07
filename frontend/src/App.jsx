import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import BlogList from './components/BlogList';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Blog Application</h1>
      <Login />
      <Signup />
      <BlogList />
    </div>
  );
};

export default App;
