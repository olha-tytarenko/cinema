import React, { Component } from 'react';
import { Route, withRouter } from 'react-router';

import 'css-reset-and-normalize-sass/scss/reset-and-normalize.scss';

import './app.scss';
import * as pages from './pages';
import * as routes from './constants/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path={routes.CATALOG} component={pages.Catalog} />
        <Route path={routes.LOGIN} component={pages.Login} />
        <Route path={routes.REGISTRATION} component={pages.Registration} />
        <Route path={routes.HALL} component={pages.Hall} />
        <Route path={routes.SEANCE} component={pages.Seance} />
        <Route path={routes.PERSONAL_AREA} component={pages.PersonalArea} />
        <Route path={routes.MOVIE_DETAILS} component={pages.MovieDetails} />
      </div>
    );
  }
}

export default App = withRouter(App);
