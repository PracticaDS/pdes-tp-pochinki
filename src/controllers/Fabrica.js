import React, {Component} from 'react';
import "./Fabrica.css";

class Fabrica extends Component {
    

    render() {
      let celdas = [];
      for(var i=0;i < 49;i++){
        celdas.push(i);
      }
      return (
        <div className="tablero">
                  { celdas.map(function(item) {
                return <div key={item} className="celda"></div>
            })
        }
        </div>
      );
    }
  }
  
  export default Fabrica;