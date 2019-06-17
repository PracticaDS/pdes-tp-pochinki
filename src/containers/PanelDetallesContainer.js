import { connect } from 'react-redux';
import PanelDetalles from '../components/PanelDetalles';
import {selectMaterial, selectBlueprint} from '../actions/maquina'
import { blueprints } from '../model/maquina';
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => (
     {
        tablero: state.maquinas.tablero,
        maquinaSeleccionada : state.maquinas.maquinaSeleccionada,
        materialSeleccionado: state.maquinas.materialSeleccionado,
        blueprints: blueprints()
    }
);



const mapActionsToProps = (dispatch) => {
  return{
      onMatClick: material => dispatch(selectMaterial(material)),
      onSelectBlueprint : blueprint => dispatch(selectBlueprint(blueprint))
  };    
};

const PanelDetallesContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(PanelDetalles);

export default withRouter(PanelDetallesContainer);