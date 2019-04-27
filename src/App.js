import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fabrica from './controllers/Fabrica';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fabrica></Fabrica>
      </div>
    );
  }
}

export default App;
