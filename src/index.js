import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import storeCreator from './storeCreator';
import { Provider } from 'react-redux';
import { selectMaquina } from './actions/maquina';
import {start} from './actions/start';

const store = storeCreator();
store.dispatch(selectMaquina("CRAFTER"));
store.dispatch(start());


render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

