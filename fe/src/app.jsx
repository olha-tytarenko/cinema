import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import reset from 'reset-css';

import './app.css';
import * as pages from './pages';
import * as routes from './constants';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={routes.SIGN_IN_ROUTE} component={pages.SignInContainer} />
        <Route path={routes.USERS_LIST_ROUTE} component={pages.UserListContainer} />
      </div>
    );
  }
}

export default App = withRouter(App);
