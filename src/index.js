import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import appState from './store/reducers.js';
import { App } from './app.jsx';

require('./assets/favicon.ico');

//let store = createStore(appState);
let store = createStore(appState, undefined,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
