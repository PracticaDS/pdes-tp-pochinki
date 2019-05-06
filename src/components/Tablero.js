import React from 'react';
import "./Tablero.css";
import crafter from "../assets/crafter.png";
import seller from "../assets/seller.png";
import starter from "../assets/starter.png";
import transporter from '../assets/transporter.png';
import furnace from '../assets/furnace.png';

const renderMaquina = (maquinas,idCelda) => {
    let fila = Math.round(idCelda / 10);
    let columna = Math.round(idCelda % 10)+1;
    let maquina = maquinas.find((value,index,array)=> {return (value.x === columna) && (value.y === fila)});
    if(maquina != null){
        //Se puede refactorear cada imagen a un componente que reciba orientacion e imagen por props
        switch (maquina.type){
            case "CRAFTER":
                return <img src={crafter} alt="crafter" width='100%' height='100%' className={maquina.orientacion}/>
            case "SELLER":
                return <img src={seller} alt="seller" width='100%' height='100%' className={maquina.orientacion}/>
            case "STARTER":
                return <img src={starter} alt="starter" width='100%' height='100%' className={maquina.orientacion}/>
            case "TRANSPORTER":
                return <img src={transporter} alt="transporter" width='100%' height='100%' className={maquina.orientacion}/>
            case "FURNACE":
                return <img src={furnace} alt="furnace" width='100%' height='100%' className={maquina.orientacion}/>
            default :
                return null
        }
    }
}

const Tablero = ({tablero,onCeldaClick}) => {
    let celdas = [];
    for(var i=0;i <100 ;i++){
      celdas.push(i);
    };
    return (
        <div className="tablero">
                  { celdas.map(function(item) {
                return <div key={item} className="celda" onClick={() => onCeldaClick(item)} > {renderMaquina(tablero,item)} </div>
            })
        }
        </div>
    )
}

export default Tablero;
