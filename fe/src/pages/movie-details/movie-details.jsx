import React, { Component } from 'react';

import { HeaderContainer, MovieContainer, MenuContainer } from '../../components';

export class MovieDetails extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <MenuContainer />
        <MovieContainer />
      </div>
    );
  }
}
