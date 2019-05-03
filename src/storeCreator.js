import { createStore } from 'redux';
import reducers from './reducers';
export default function() {
 return createStore(
     reducers,
     {maquinaSeleccionada:'NO'},
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     )
};