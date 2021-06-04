import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import mainStore from './store/reducer'

const rootReducer = combineReducers({
  mainStore,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))
// const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


