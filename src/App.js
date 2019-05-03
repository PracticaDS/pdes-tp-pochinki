import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fabrica from './components/Fabrica';
import SeleccionMaquinasContainer from './containers/SeleccionMaquinasContainer';

const App = () => {
    return (
      <div className="App">
        <div className="tab">
          <Fabrica></Fabrica>
        </div>
        
      </div>
    );
  }


export default App;
