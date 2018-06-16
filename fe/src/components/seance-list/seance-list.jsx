import React, { Component } from 'react';

import './seance-list.scss';

export class SeanceList extends Component {
  constructor(props) {
    super(props);

    this.viewSeance = this.viewSeance.bind(this);
  }

  viewSeance(seanceId) {
    this.props.getSeance(seanceId);
    this.props.getTickets(seanceId);
    this.props.navigateToSelectedSeance();
  }

  render() {
    return (
      <div className="seances">
        <h2 className="seances__header">Seances</h2>
        <ol>
          {this.props.seances &&
          this.props.seances.map((seance) => {
            const {
              date,
              time,
              hall,
              price,
              id,
            } = seance;

            return (
              <li className="seance" key={id}>
                <p>{date}</p>
                <p>{time}</p>
                <p>{hall}</p>
                <p>{price}</p>
                <button className="seance__view-tickets" onClick={() => this.viewSeance(id)}>View tickets</button>
              </li>
            );
          })
          }
        </ol>
      </div>
    );
  }
}
