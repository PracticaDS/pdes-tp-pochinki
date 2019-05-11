import { connect } from 'react-redux';
import Tablero from '../components/Tablero';
import {colocarMaquina} from '../actions/maquina';

const mapStateToProps = (state) => (
     {
        tablero: state.maquinas.tablero,
        maquinaSeleccionada : state.maquinas.maquinaSeleccionada,
    }
);



const mapActionsToProps = (dispatch) => {
  return{
      onCeldaClick: idCelda => dispatch(colocarMaquina(idCelda))
  };    
};

const TableroContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(Tablero);

export default TableroContainer;