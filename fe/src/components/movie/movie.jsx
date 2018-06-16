import React, { Component } from 'react';

import { SeanceListContainer } from '../seance-list';
import './movie.scss';

export class Movie extends Component {
  render() {
    const {
      movie: {
        description,
        isForAdult,
        name,
        rating,
        releaseDate,
        rentalStart,
        rentalEnd,
        genres,
      },
    } = this.props;
    return (
      <section className="movie">
        <img
          src="http://www.seti.ee/narva/uploads/newbb/4_481fa891af340.jpg"
          alt="poster"
          className="movie__poster"
        />
        <div className="movie__details">
          <h2 className="movie__details-name">{name}</h2>
          <p className="movie__details-description"><strong>Description:</strong> {description}</p>
          <p className="movie__details-genres"><strong>Genres:</strong> {genres}</p>
          <p className="movie__details-release-date"><strong>Release date:</strong> {releaseDate}</p>
          <p className="movie__details-rental-period">
            <strong>Rental period:</strong> {`${rentalStart} - ${rentalEnd}`}
          </p>
          <p className="movie__details-rating"><strong>Rating:</strong> {rating}</p>
          <SeanceListContainer />
        </div>
      </section>
    );
  }
}
