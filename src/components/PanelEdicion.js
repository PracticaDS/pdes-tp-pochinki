import React from 'react';
import eliminar from '../assets/eliminar.png'
import mover from '../assets/mover.png'
import rotar from '../assets/rotar.png'
import "./PanelEdicion.css"

const PanelEdicion = ({tablero,maquinaSeleccionada,herramienta,onHerramientaClick}) => {
    return (
    <div className="panelEdicion">
        <img src={eliminar} alt="eliminarButton" onClick={() => onHerramientaClick("BORRAR")} className="botonEdicion" />
        <img src={mover} alt="moverButton" onClick={() => onHerramientaClick("MOVER")} className="botonEdicion" />
        <img src={rotar} alt="rotarButton" onClick={() => onHerramientaClick("ROTAR")} className="botonEdicion" />
    </div> )
}

export default PanelEdicion;