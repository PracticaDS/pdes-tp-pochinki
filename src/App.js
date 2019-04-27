import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fabrica from './controllers/Fabrica';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="tab">
          <Fabrica></Fabrica>
        </div>
        
      </div>
    );
  }
}

export default App;
