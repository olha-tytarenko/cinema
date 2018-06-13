import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';

import { Header } from './header';
import { CATALOG, LOGIN } from '../../constants/routes';

const mapStateToProps = state => ({
  userName: state.user.name,
  isLogged: !!state.user.name,
});

const mapDispatchToProps = {
  signOut: () => push(CATALOG),
  signIn: () => push(LOGIN),
};

export const HeaderContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
