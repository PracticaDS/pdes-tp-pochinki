import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import storeCreator from './storeCreator';
import { Provider } from 'react-redux';
//import { selectMaquina, colocarMaquina } from './actions/maquina';
import {tick} from './actions/start';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login';
import history from "./history";
import InfoUser from './components/InfoUser';




const store = storeCreator();
//store.dispatch(selectMaquina({tipoMaquina: "STARTER", material: "ORO"}));
//store.dispatch(colocarMaquina(2));
const loop = () => {
    setTimeout(() => {store.dispatch(tick());loop()},5000)
}
loop();


render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path='/' component={Login}></Route>
            <Route path='/game' component={App}></Route>
            <Route path='/user/:username?' component={InfoUser}></Route>
        </Router>
    </Provider>
, document.getElementById('root'));

