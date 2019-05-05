import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import storeCreator from './storeCreator';
import { Provider } from 'react-redux';
import { selectMaquina } from './actions/maquina';

const store = storeCreator();
store.dispatch(selectMaquina("CRAFTER"));


render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

