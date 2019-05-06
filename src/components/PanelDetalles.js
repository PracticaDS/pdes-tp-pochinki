import React from 'react';
import './PanelDetalles.css';

const renderInfo= (name,costo,frecuencia) => {
        return <div>
            <p className="infoText">{name}</p>
            <p className="infoText">Costo: {costo}</p>
            <p className="infoText">Frecuencia: {frecuencia}</p>
            </div>
}

const renderSinInfo = () => {
    return <div><p className="infoText">Seleccione una maquina para ver su detalle</p></div>
}

const PanelDetalles = ({tablero,maquinaSeleccionada}) => {

    const displayInfo = (maquina) => {
        switch (maquina){
            case "CRAFTER":
                return renderInfo(maquina,500,"1/ segundo")
            case "SELLER":
                return renderInfo(maquina,250,"1/ segundo")
            case "STARTER":
                return renderInfo(maquina, 150,"1/ segundo")
            case "TRANSPORTER":
                return renderInfo(maquina,100,"1/ segundo")
            case "FURNACE":
                return renderInfo(maquina,300,"1/ segundo")
            default:
                return renderSinInfo()
        }
    }
    
    return (
        <div className= "panel">
            <h3 className="tituloPanel">Detalles</h3>
            <div className="info">
                <div className="infobox">
                    {displayInfo(maquinaSeleccionada)}
                    
                </div>
                
            </div>
        </div>
    )
}

export default PanelDetalles;