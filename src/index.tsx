import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import App from './App';

import reducer from './reducers';

import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// sagaMiddleware.run();

const ProvidedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ProvidedApp />, document.getElementById('root'));
