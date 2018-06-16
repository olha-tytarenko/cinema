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

import { movieListReducer } from './reducers/movie-list';
import { userInfoReducer } from './reducers/user';
import { movieReducer } from './reducers/movie-reducer';
import App from './app';

const history = createBrowserHistory();
const middlewareForRouting = routerMiddleware(history);
const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware,
  thunk,
  middlewareForRouting,
)(createStore);

const reducer = combineReducers({
  movieList: movieListReducer,
  user: userInfoReducer,
  movie: movieReducer,
});

const store = createStoreWithMiddleware(reducer);
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'),
);
