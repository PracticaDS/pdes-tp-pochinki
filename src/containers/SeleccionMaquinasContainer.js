import { connect } from 'react-redux';

import {selectMaquina} from '../actions/maquina';
import SeleccionMaquinas from '../components/SeleccionMaquinas';

const mapStateToProps = (state) => (
      
     {
        maquinaSeleccionada : state.maquinas.maquinaSeleccionada,
        materialSeleccionado: state.maquinas.materialSeleccionado
    }
);



const mapActionsToProps = (dispatch) => {
  return{
      onMaquinaClick: maquina => dispatch(selectMaquina(maquina))
  };    
};

const SeleccionMaquinasContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(SeleccionMaquinas);

export default SeleccionMaquinasContainer;