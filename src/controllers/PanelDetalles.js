import React from 'react';
import './PanelDetalles.css';


const PanelDetalles = () => {
    const name= "Crafter";
    const costo= 800;
    const frecuencia = 1;
    return (
        <div className= "panel">
            <h3 className="tituloPanel">Detalles</h3>
            <div className="info">
                <div className="infobox">
                    <p className="infoText">{name}</p>
                    <p className="infoText">Costo: {costo}</p>
                    <p className="infoText">Frecuencia: {frecuencia}</p>
                </div>
                
            </div>
        </div>
    )
}

export default PanelDetalles;