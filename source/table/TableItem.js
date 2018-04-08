import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

import './style.less';

export default class TableItem extends React.PureComponent {

  render() {

    const {
      name,
      price,
      weight,
      isInStock,
      temp
    } = this.props

    return (
      <div className="table-rows">
        <div className="table__row">{name}</div>
        <div className="table__row">{Math.ceil(price)} руб.</div>
        <div className="table__row">{weight}</div>
        <div className={`table__row ${isInStock ? 'green' : 'red'}`}>{isInStock ? '✓': '×'}</div>
        <div className={`table__row ${temp <= 0 ? 'blue' : 'red'}`}>{temp}</div>
      </div>
    )
  }
}   

TableItem.defaultProps = {
  price: 0,
  isInStock: false
} 

TableItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  weight: PropTypes.number,
  isInStock: PropTypes.bool,
  temp: PropTypes.number
}