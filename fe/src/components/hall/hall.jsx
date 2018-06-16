import React, { Component } from 'react';
import classNames from 'classnames';

import './hall.scss';

export class Hall extends Component {
  constructor(props) {
    super(props);

    this.selectDeselectTicket = this.selectDeselectTicket.bind(this);
  }

  selectDeselectTicket({ id }) {
    const {
      selectedTickets,
      selectTicket,
      deselectTicket,
    } = this.props;

    console.log(selectedTickets.indexOf(id) === -1);

    const fn = selectedTickets.indexOf(id) === -1 ?
      selectTicket :
      deselectTicket;

    fn(id);
  }

  render() {
    const { tickets } = this.props.seance;
    const { selectedTickets, movie: { name }, seance: { date, time, price } } = this.props;

    return (
      <div className="hall-block">
        <h2 className="movie-heading">{name}</h2>
        <h3 className="time">{date}, {time}</h3>
        <div className="places">
          {tickets &&
          tickets.map((row) => {
            const placesInRow = row.map((ticket) => {
              const className = classNames(
                'place',
                { 'free-place': ticket.isFree && selectedTickets.indexOf(ticket.id) === -1 },
                { 'place-selected': selectedTickets.indexOf(ticket.id) !== -1 },
              );
              return (
                <div
                  className={className}
                  onClick={() => this.selectDeselectTicket(ticket)}
                />);
            });

            return (
              <div className="row">
                {placesInRow}
              </div>
            );
          })
          }
        </div>
        {!!selectedTickets.length &&
          <div className="tickets">
            <h2 className="tickets__heading">Selected tickets</h2>
              <ol className="tickets__list">
                {
                  selectedTickets.map(ticketId => {
                    let ticket = {};
                    tickets.forEach(row => {
                      const result = row.find(place => place.id === ticketId);
                      if (result) {
                        ticket = result;
                      }
                    });

                    return (
                      <li className="tickets__list-item">
                        row - {ticket.row}, place - {ticket.place}
                      </li>
                    );
                  })
                }
              </ol>
            <p className="total-price">Total sum: {price * selectedTickets.length}</p>
            <button className="buy-button">Buy</button>
          </div>
        }
      </div>
    );
  }
}
