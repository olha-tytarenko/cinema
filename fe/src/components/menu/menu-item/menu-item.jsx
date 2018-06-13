import React, { Component } from 'react';

export class MenuItem extends Component {
  render() {
    const {
      itemName,
      itemOnClickHandler,
      isSelected,
    } = this.props;

    return (
      <li className={isSelected && 'selected'}>
        <a href="" onClick={itemOnClickHandler}>{itemName}</a>
      </li>
    );
  }
}
