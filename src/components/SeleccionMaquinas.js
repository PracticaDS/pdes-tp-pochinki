import React from 'react';
import "./SeleccionMaquinas.css";
import crafter from "../assets/crafter.png";
import seller from "../assets/seller.png";
import starter from "../assets/starter.png";
import transporter from '../assets/transporter.png';
import furnace from '../assets/furnace.png';
//import oro from '../assets/oro.PNG'
import PropTypes from 'prop-types';


const SeleccionMaquinas = ({maquinaSeleccionada,onMaquinaClick}) => (
        <div className="panelSeleccion">
            <img src={crafter} alt="crafterBot" className="botonMaquina" onClick={() => onMaquinaClick({tipoMaquina: "CRAFTER"})}/>
            <img src={furnace} alt="furnaceBot" className="botonMaquina" onClick={() =>onMaquinaClick({tipoMaquina: "FURNACE"})}/>
            <img src={seller} alt="sellerBot" className="botonMaquina" onClick={() =>onMaquinaClick({tipoMaquina: "SELLER"})}/>
            <img src={starter} alt="starterBot" className="botonMaquina" onClick={() => onMaquinaClick({tipoMaquina: "STARTER", material: "ORO"})}/>
            <img src={transporter} alt="transporterBot" className="botonMaquina"onClick={() =>onMaquinaClick({tipoMaquina: "TRANSPORTER"})} />

        </div>
    );

// const renderMats = ({onMaquinaClick}) => (
//     <div className="panelMats">
//         <img src={oro} alt="oroBot" className="botonMat" onClick={() => onMaquinaClick({tipoMaquina: "STARTER", material: "ORO"})}/>
//     </div>
// );

SeleccionMaquinas.propTypes = {
    maquinaSeleccionada: PropTypes.string.isRequired,
    onMaquinaClick: PropTypes.func.isRequired
}


export default SeleccionMaquinas;
