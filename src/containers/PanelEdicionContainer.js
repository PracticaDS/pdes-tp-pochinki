import { connect } from 'react-redux';
import PanelEdicion from '../components/PanelEdicion';
import { selectHerramienta } from '../actions/herramienta';
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => (
      
     {
        herramienta : state.maquinas.herramienta
    }
);



const mapActionsToProps = (dispatch) => {
  return{
      onHerramientaClick: herramienta => dispatch(selectHerramienta(herramienta))
  };    
};

const PanelEdicionContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(PanelEdicion);

export default withRouter(PanelEdicionContainer);