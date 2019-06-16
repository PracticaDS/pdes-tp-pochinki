import React from 'react';
import './PanelDetalles.css';
import oro from '../assets/oro.PNG'
import cobre from '../assets/cobre.PNG'
import aluminio from '../assets/aluminio.PNG'
import carbon from '../assets/carbon.PNG'
import hierro from '../assets/aluminio.PNG'
import { precioMaquina } from '../model/maquina';

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

const renderInfoMat = (materialSeleccionado,onMatClick) => {
    return  <div className="panelMats">
                <div className="material">
                    <img src={oro} alt="oroBot" className="botonMat" onClick={() => onMatClick("ORO")}/>
                    <div className={materialSeleccionado === 'ORO' ? 'infoMat seleccionado' : 'infoMat'}> Oro </div>
                </div>
                <div className="material">
                    <img src={cobre} alt="cobreBot" className="botonMat" onClick={() => onMatClick("COBRE")}/>
                    <div className={materialSeleccionado === 'COBRE' ? 'infoMat seleccionado' : 'infoMat'}> Cobre </div>
                </div>
                <div className="material">
                    <img src={aluminio} alt="aluminioBot" className="botonMat" onClick={() => onMatClick("ALUMINIO")}/>
                    <div className={materialSeleccionado === 'ALUMINIO' ? 'infoMat seleccionado' : 'infoMat'}> Aluminio </div>
                </div>
                <div className="material">
                    <img src={carbon} alt="carbonBot" className="botonMat" onClick={() => onMatClick("CARBON")}/>
                    <div className={materialSeleccionado === 'CARBON' ? 'infoMat seleccionado' : 'infoMat'}> Carbon </div>
                </div>
                <div className="material">
                    <img src={hierro} alt="hierroBot" className="botonMat" onClick={() => onMatClick("HIERRO")}/>
                    <div className={ materialSeleccionado === 'HIERRO' ? 'infoMat seleccionado' : 'infoMat'}> Hierro </div>
                </div>     
                
            </div>
}

const PanelDetalles = ({materialSeleccionado,maquinaSeleccionada,onMatClick}) => {

    const displayInfoSt= (maquina) => {
        switch(maquina){
            case "STARTER":
                return renderInfoMat(materialSeleccionado,onMatClick)
            default:
                return <div></div>
        }
    }

    const displayInfo = (maquina) => {
        switch (maquina){
            case "CRAFTER":
                return renderInfo(maquina,precioMaquina(maquina),"1/ segundo")
            case "SELLER":
                return renderInfo(maquina,precioMaquina(maquina),"1/ segundo")
            case "STARTER":
                return renderInfo(maquina,precioMaquina(maquina),"1/ segundo")
            case "TRANSPORTER":
                return renderInfo(maquina,precioMaquina(maquina),"1/ segundo")
            case "FURNACE":
                return renderInfo(maquina,precioMaquina(maquina),"1/ segundo")
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