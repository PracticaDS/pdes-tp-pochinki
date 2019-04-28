import React, { Component } from 'react';
import "./SeleccionMaquinas.css";
import crafter from "../assets/crafter.png";
import seller from "../assets/seller.png";
import starter from "../assets/starter.png";
import transporter from '../assets/transporter.png';
import furnace from '../assets/furnace.png';

const SeleccionMaquinas = () => {
    return (
        <div className="panelSeleccion">
            <img src={crafter} className="botonMaquina"/>
            <img src={furnace} className="botonMaquina"/>
            <img src={seller} className="botonMaquina"/>
            <img src={starter} className="botonMaquina"/>
            <img src={transporter} className="botonMaquina"/>

        </div>
    )
}

export default SeleccionMaquinas;
