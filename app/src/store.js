import {createStore, compose, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import teslaReducer from './reducers/teslaReducer';

const store = process.env.NODE_ENV !== 'production' ?
  createStore(teslaReducer, compose(
    applyMiddleware(createLogger({collapsed: true})),
      window.devToolsExtension && window.devToolsExtension()
    )
  ) : createStore(teslaReducer);

export default store;