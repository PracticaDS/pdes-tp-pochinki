import { connect } from 'react-redux';
import Fabrica from '../components/Fabrica';

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

export default FabricaContainer;