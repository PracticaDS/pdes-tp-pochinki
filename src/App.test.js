import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import storeCreator from './storeCreator';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const store = storeCreator();
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App/></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
