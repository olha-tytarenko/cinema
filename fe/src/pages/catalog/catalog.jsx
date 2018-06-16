import React, { Component } from 'react';

import { HeaderContainer, MenuContainer, MovieListContainer } from '../../components';

export class Catalog extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <MenuContainer />
        <MovieListContainer />
      </div>
    );
  }
}
