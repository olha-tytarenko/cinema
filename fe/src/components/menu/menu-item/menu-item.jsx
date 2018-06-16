import React, { Component } from 'react';
import classNames from 'classnames';

import './menu-item.scss';

export class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(e) {
    e.preventDefault();

    this.props.onClickHandler();
  }

  render() {
    const {
      itemName,
      isSelected,
    } = this.props;
    const itemLinkClassNames = classNames('item__link', { 'item__link-selected': isSelected })

    return (
      <li className="item">
        <a className={itemLinkClassNames} href="" onClick={this.onClickHandler}>{itemName}</a>
      </li>
    );
  }
}
