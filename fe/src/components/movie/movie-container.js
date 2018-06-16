import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';

import { Movie } from './movie';
import { CATALOG, LOGIN } from '../../constants/routes';

const mapStateToProps = state => ({
  movie: state.movie.selectedMovie ? state.movie.selectedMovie : {},
});

const mapDispatchToProps = {
};

export const MovieContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));

