import React from 'react';
import { Randomiser } from './features/randomiser/Randomiser.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Want to waste time? Get a random Reddit post.</h1>
        <h6>Click Snoo (which, apparently, is the alien's name) and they'll spin you up some posts.</h6>
        <Randomiser />
        <p style={{fontSize: '50%'}}>
          This is an educational project, meant to develop my React and Redux skills.
        </p>
        <a href='mailto:theblazingsnow@gmail.com' style={{fontSize: '50%', color: 'black'}}>
          Contact
        </a>
      </header>
    </div>
  );
}

export default App;
