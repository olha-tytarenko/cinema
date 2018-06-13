import React, { Component } from 'react';
import { MenuItem } from './menu-item/menu-item';

export class Menu extends Component {
  render() {
    const { navigateToCatalog } = this.props;

    return (
      <ul>
        <MenuItem
          itemName="Catalog"
          selected
          onClick={navigateToCatalog}
        />
      </ul>
    );
  }
}
