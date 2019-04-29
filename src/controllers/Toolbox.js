import React,{Component} from 'react';
import './Toolbox.css';
import SeleccionMaquinas from './SeleccionMaquinas';
import PanelEdicion from './PanelEdicion';

const Toolbox = () => {
    return (
        <div className='toolbox'>
            <h3 className='title'>Maquinas</h3>
            <SeleccionMaquinas></SeleccionMaquinas>
            <h3 className='title'>Edicion</h3>
            <PanelEdicion></PanelEdicion>
        </div>
    );
}

export default Toolbox;