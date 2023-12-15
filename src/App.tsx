import React from 'react';
import medauLogo from './medau-blue.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={medauLogo} className="App-logo" alt="logo" />
        <p className="App-footer">
          (c) 2023 Medau, Inc. All rights reserved.
        </p>
      </header>
    </div>
  );
}

export default App;
