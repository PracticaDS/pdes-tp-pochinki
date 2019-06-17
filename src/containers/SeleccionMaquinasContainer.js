import { connect } from 'react-redux';

import {selectMaquina} from '../actions/maquina';
import SeleccionMaquinas from '../components/SeleccionMaquinas';
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => (
      
     {
        maquinaSeleccionada : state.maquinas.maquinaSeleccionada
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

export default withRouter(SeleccionMaquinasContainer);