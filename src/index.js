import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import storeCreator from './storeCreator';
import { Provider } from 'react-redux';
import { selectMaquina, colocarMaquina } from './actions/maquina';
import {tick} from './actions/start';

const store = storeCreator();
store.dispatch(selectMaquina("STARTER"));
store.dispatch(colocarMaquina(2));
const loop = () => {
    setTimeout(() => {store.dispatch(tick());loop()},5000)
}
loop();


render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

