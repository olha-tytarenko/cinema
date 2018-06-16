import React, { Component } from 'react';
import { MovieItemContainer } from './movie-item';

import './movie-list.scss';

export class MovieList extends Component {
  componentDidMount() {
    this.props.clearMovieList();
    this.props.getMovieList();
  }

  render() {
    const { movieList } = this.props;
    return (
      <ul className="movie-list">
        {movieList.map(movie => <MovieItemContainer movie={movie} key={movie.id} />)}
      </ul>
    );
  }
}
