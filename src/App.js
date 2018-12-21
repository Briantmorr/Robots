import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './components/game.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Robots</h1>
        </header>
      
      <Game />

      </div>
    );
  }
}

export default App;
