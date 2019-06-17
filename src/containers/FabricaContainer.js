import { connect } from 'react-redux';
import Fabrica from '../components/Fabrica';
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => (
      
     {
        dinero : state.maquinas.dinero
    }
);



const mapActionsToProps = (dispatch) => {
   return {}
};

const FabricaContainer = connect(
  mapStateToProps,
  mapActionsToProps
)(Fabrica);

export default withRouter(FabricaContainer);