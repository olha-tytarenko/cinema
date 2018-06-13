import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';
import reset from 'reset-css';

import './app.css';
import * as pages from './pages';
import * as routes from './constants/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path={routes.LOGIN} component={pages.Login} />
        <Route path={routes.REGISTRATION} component={pages.Registration} />
        <Route path={routes.HALL} component={pages.Hall} />
        <Route path={routes.SEANCE} component={pages.Seance} />
        <Route exact path={routes.CATALOG} component={pages.Catalog} />
        <Route path={routes.PERSONAL_AREA} component={pages.PersonalArea} />
      </div>
    );
  }
}

export default App = withRouter(App);
