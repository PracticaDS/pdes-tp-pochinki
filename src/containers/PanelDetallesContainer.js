import { connect } from 'react-redux';
import PanelDetalles from '../components/PanelDetalles';

const mapStateToProps = (state) => (
     {
        tablero: state.maquinas.tablero,
        maquinaSeleccionada : state.maquinas.maquinaSeleccionada
    }
);



const mapActionsToProps = (dispatch) => {
  return{
      
  };    
};

const PanelDetallesContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(PanelDetalles);

export default PanelDetallesContainer;