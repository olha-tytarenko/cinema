import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';

import { Menu } from './menu';
import { CATALOG } from '../../constants/routes';

const mapDispatchToProps = {
  navigateToCatalog: () => push(CATALOG),
};

export const MenuContainer = withRouter(connect(null, mapDispatchToProps)(Menu));
