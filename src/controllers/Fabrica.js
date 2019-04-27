import React, {Component} from 'react';
import "./Fabrica.css";
import Tablero from './Tablero';
import Toolbox from './Toolbox';

class Fabrica extends Component {
    

    render() {
      return (
        <div style={{width: '100%'}}>
          <Toolbox></Toolbox>
          <Tablero></Tablero>
        </div>
      );
    }
  }
  
  export default Fabrica;