import React, {Component} from 'react';
import "./Fabrica.css";
import Tablero from './Tablero';
import Toolbox from './Toolbox';

class Fabrica extends Component {
    

    render() {
      return (
        <div className="fabricaElements">
          <div className="espacioProvisorio"></div>
          <Tablero></Tablero>
          <Toolbox></Toolbox>
        </div>
      );
    }
  }
  
  export default Fabrica;