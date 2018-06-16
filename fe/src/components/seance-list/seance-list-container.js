import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';

import { SeanceList } from './seance-list';
import { SEANCE } from '../../constants/routes';
import { getSeance, getMovie, getSeances, getTickets } from '../../actions/selected-movie';

const mapStateToProps = state => ({
  seances: state.movie.seanceList,
});

const mapDispatchToProps = {
  navigateToSelectedSeance: () => push(SEANCE),
  getSeance,
  getMovie,
  getSeances,
  getTickets,
};

export const SeanceListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SeanceList));
