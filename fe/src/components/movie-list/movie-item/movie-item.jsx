import React, { Component } from 'react';
import './movie-item.scss';

export class MovieItem extends Component {
  constructor(props) {
    super(props);

    this.goToMovieDetails = this.goToMovieDetails.bind(this);
  }

  goToMovieDetails() {
    const { id } = this.props.movie;
    this.props.saveSelectedMovieId(id);
    this.props.getMovie(id);
    this.props.getSeances(id);
    this.props.navigateToMovieDetails();
  }

  render() {
    const { movie } = this.props;
    return (
      <li className="movie-item">
        <img
          src="http://www.seti.ee/narva/uploads/newbb/4_481fa891af340.jpg"
          alt="poster"
          className="movie-item__poster"
        />
        <div className="movie-item__details">
          <h2 className="movie-item__details-name">{movie.name}</h2>
          <p className="movie-item__details-description"><strong>Description:</strong> {movie.description}</p>
          <p className="movie-item__details-genres"><strong>Genres:</strong> {movie.genres}</p>
          <button
            className="movie-item__details-button"
            onClick={this.goToMovieDetails}
          >
            View seances
          </button>
        </div>
      </li>
    );
  }
}
