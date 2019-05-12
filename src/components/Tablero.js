import React from 'react';
import "./Tablero.css";
import placeholder from '../assets/placeholder.png';

const renderMaquina = (maquinas,idCelda) => {
    let fila = Math.round(idCelda / 10);
    let columna = Math.round(idCelda % 10)+1;
    let maquina = maquinas.find((value,index,array)=> {return (value.x === columna) && (value.y === fila)});
    if(maquina != null){
        let clase = maquina.recurso !== "" ? maquina.orientacion + " " + maquina.type + "-active" : maquina.orientacion+ " " + maquina.type

        //Se puede refactorear cada imagen a un componente que reciba orientacion e imagen por props
        switch (maquina.type){
            case "CRAFTER":
                return <img src={placeholder} alt="crafter" width='100%' height='100%' className={clase}/>
            case "SELLER":
                return <img src={placeholder} alt="seller" width='100%' height='100%' className={clase}/>
            case "STARTER":
                return <img src={placeholder} alt="starter" width='100%' height='100%' className={clase}/>
            case "TRANSPORTER":
                return <img src={placeholder} alt="transporter" width='100%' height='100%' className={clase}/>
            case "FURNACE":
                return <img src={placeholder} alt="furnace" width='100%' height='100%' className={clase}/>
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
