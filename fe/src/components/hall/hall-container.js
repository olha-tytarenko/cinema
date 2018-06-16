import { connect } from 'react-redux';

import { Hall } from './hall';
import { selectTicket, deselectTicket } from '../../actions/selected-movie';

const mapStateToProps = state => ({
  seance: state.movie.seance ? state.movie.seance : {},
  movie: state.movie.selectedMovie ? state.movie.selectedMovie : {},
  selectedTickets: state.movie.selectedTickets,
});

const mapDispatchToProps = {
  selectTicket,
  deselectTicket,
};

export const HallContainer = connect(mapStateToProps, mapDispatchToProps)(Hall);

