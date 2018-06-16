import React, { Component } from 'react';
import { MenuItem } from './menu-item/menu-item';
import './menu.scss';

export class Menu extends Component {
  render() {
    const { navigateToCatalog } = this.props;

    return (
      <ul className="menu">
        <MenuItem
          itemName="Catalog"
          isSelected
          onClickHandler={navigateToCatalog}
        />
      </ul>
    );
  }
}
