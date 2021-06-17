import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const myStore = () => {

  const windowGlobal = typeof window !== 'undefined' && window;

  const devtools =
  process.env.NODE_ENV === 'development' && windowGlobal.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    : funk => funk;



  ///////////////////////////////////
  /// REDUX MIDDLEWARE START: logger
  //////////////////////////////////
  const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd();
    return result
  }
  ///////////////////////////////////
  /// REDUX MIDDLEWARE END logger
  //////////////////////////////////

  // BEFORE MIDDLEWARE logger, crashReporter
  // const store = createStore(rootReducer, compose(applyMiddleware(thunk), devtools));

  const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger), devtools)); 

  return store;
};

export default myStore;