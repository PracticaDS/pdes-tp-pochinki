import React from 'react';
import "./Fabrica.css";
import Tablero from '../containers/TableroContainer';
import Toolbox from './Toolbox';
import PanelDetalles from '../containers/PanelDetallesContainer';

const Fabrica = ({dinero}) => {
    
    return (
      <div className="fabricaElements">
        <div className="headerScore"> Dinero: $ {dinero}</div>
        <PanelDetalles></PanelDetalles>
        <Tablero></Tablero>
        <Toolbox></Toolbox>        
      </div>
      );
  }
  
  export default Fabrica;