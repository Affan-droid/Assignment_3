import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <p className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="name">Affan Assignment</h1>
      <h4>Assignment # 3</h4>
      <h2>CI and CD through workflows</h2>
      <h3>Deployment on heroku through workflow</h3>
      <a href="https://codecov.io/gh/Affan-droid/Assignment_3">
      <img src="https://codecov.io/gh/Affan-droid/Assignment_3/branch/master/graph/badge.svg?token=FP86EX8RO0"/>
      </a>
    </p>
    </div>
  );
}

export default App;
