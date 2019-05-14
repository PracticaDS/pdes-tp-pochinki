import React from 'react';
import './PanelDetalles.css';
import oro from '../assets/oro.PNG'
import cobre from '../assets/cobre.PNG'
import aluminio from '../assets/aluminio.PNG'
import carbon from '../assets/carbon.PNG'
import hierro from '../assets/aluminio.PNG'

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

const renderInfoMat = (onMatClick) => {
    return  <div className="panelMats">
                <img src={oro} alt="oroBot" className="botonMat" onClick={() => onMatClick("ORO")}/>
                <p className="infoMat"> Oro </p>
                <img src={cobre} alt="cobreBot" className="botonMat" onClick={() => onMatClick("COBRE")}/>
                <p className="infoMat"> Cobre </p>
                <img src={aluminio} alt="aluminioBot" className="botonMat" onClick={() => onMatClick("ALUMINIO")}/>
                <p className="infoMat"> Aluminio </p>
                <img src={carbon} alt="carbonBot" className="botonMat" onClick={() => onMatClick("CARBON")}/>
                <p className="infoMat"> Carbon </p>
                <img src={hierro} alt="hierroBot" className="botonMat" onClick={() => onMatClick("HIERRO")}/>
                <p className="infoMat"> Hierro </p>
            </div>
}

const PanelDetalles = ({tablero,maquinaSeleccionada,onMatClick}) => {

    const displayInfoSt= (maquina) => {
        switch(maquina){
            case "STARTER":
                return renderInfoMat(onMatClick)
            default:
                return <div></div>
        }
    }

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
                <div>
                    {displayInfoSt(maquinaSeleccionada)}
                </div>
            </div>
        </div>
    )
}

export default PanelDetalles;