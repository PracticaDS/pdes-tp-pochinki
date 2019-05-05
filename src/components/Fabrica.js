import React from 'react';
import "./Fabrica.css";
import Tablero from '../containers/TableroContainer';
import Toolbox from './Toolbox';
import PanelDetalles from '../containers/PanelDetallesContainer';

const Fabrica = () => {
    
    return (
      <div className="fabricaElements">
        <PanelDetalles></PanelDetalles>
        <Tablero></Tablero>
        <Toolbox></Toolbox>        
      </div>
      );
  }
  
  export default Fabrica;