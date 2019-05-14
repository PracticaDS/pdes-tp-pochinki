import { connect } from 'react-redux';
import PanelDetalles from '../components/PanelDetalles';
import {selectMaterial} from '../actions/maquina'

const mapStateToProps = (state) => (
     {
        tablero: state.maquinas.tablero,
        maquinaSeleccionada : state.maquinas.maquinaSeleccionada,
        materialSeleccionado: state.maquinas.materialSeleccionado
    }
);



const mapActionsToProps = (dispatch) => {
  return{
      onMatClick: material => dispatch(selectMaterial(material))
  };    
};

const PanelDetallesContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(PanelDetalles);

export default PanelDetallesContainer;