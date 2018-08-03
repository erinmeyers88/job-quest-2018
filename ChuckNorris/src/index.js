import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});

let store = {};

if (process.env.NODE_ENV === 'development') {
  store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ));
} else {
  store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
  <AppContainer />
</Provider>, document.getElementById('root'));

registerServiceWorker();
