import React from 'react';
import eliminar from '../assets/eliminar.png'
import mover from '../assets/mover.png'
import rotar from '../assets/rotar.png'
import "./PanelEdicion.css"

const PanelEdicion = () => {
    return (
    <div className="panelEdicion">
        <img src={eliminar} alt="eliminarButton" className="botonEdicion" />
        <img src={mover} alt="moverButton" className="botonEdicion" />
        <img src={rotar} alt="rotarButton" className="botonEdicion" />
    </div> )
}

export default PanelEdicion;