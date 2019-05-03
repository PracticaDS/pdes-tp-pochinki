import React from 'react';
import "./SeleccionMaquinas.css";
import crafter from "../assets/crafter.png";
import seller from "../assets/seller.png";
import starter from "../assets/starter.png";
import transporter from '../assets/transporter.png';
import furnace from '../assets/furnace.png';
import PropTypes from 'prop-types';


const SeleccionMaquinas = ({maquinaSeleccionada,onMaquinaClick}) => (
        <div className="panelSeleccion">
            <a href="#" > {maquinaSeleccionada}</a>
            <img src={crafter} className="botonMaquina" onClick={() => onMaquinaClick("CRAFTER")}/>
            <img src={furnace} className="botonMaquina" onClick={() =>onMaquinaClick("FURNACE")}/>
            <img src={seller} className="botonMaquina" onClick={() =>onMaquinaClick("SELLER")}/>
            <img src={starter} className="botonMaquina" onClick={() =>onMaquinaClick("STARTER")}/>
            <img src={transporter} className="botonMaquina"onClick={() =>onMaquinaClick("TRANSPORTER")} />

        </div>
    );

SeleccionMaquinas.propTypes = {
    maquinaSeleccionada: PropTypes.string.isRequired,
    onMaquinaClick: PropTypes.func.isRequired
}


export default SeleccionMaquinas;
