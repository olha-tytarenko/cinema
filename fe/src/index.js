import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';

import { usersListReducer } from './pages/users-list/users-list-reducer';
import { signInReducer } from './pages/sign-in/sign-in-reducer';
import App from './app';

const history = createBrowserHistory();
const middlewareForRouting = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware,
  thunk,
  middlewareForRouting,
)(createStore);

const reducer = combineReducers({
  usersList: usersListReducer,
  user: signInReducer,
});

const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'),
);
