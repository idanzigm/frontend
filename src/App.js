import React from 'react';
import './App.css';
import Directory from './components/Directory';

function App() {
  return (
    <><div color="green">
      <span><form></form></span>
      <span><button>Login</button></span>
      <span><button>Exit</button></span>
    </div>
    <div>
      <Directory></Directory>
    </div>
    <div>
      <span>contact us</span>
      <span>about us</span>
      <div>
        <image id="logo"></image>
      </div>
    </div></>
  );
}

export default App;
