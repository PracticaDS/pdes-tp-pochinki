import React from 'react';
import "./Tablero.css";

const Tablero = () => {
    let celdas = [];
    for(var i=0;i <100 ;i++){
      celdas.push(i);
    };
    return (
        <div className="tablero">
                  { celdas.map(function(item) {
                return <div key={item} className="celda"></div>
            })
        }
        </div>
    )
}

export default Tablero;
