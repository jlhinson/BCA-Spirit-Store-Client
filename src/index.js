import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
//import { createStore } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import appState from './store/reducers.js';
import { App } from './app.jsx';

require('./assets/favicon.ico');

//let store = createStore(appState);
let store = createStore(appState, undefined, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
