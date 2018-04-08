import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Scrollbars } from 'react-custom-scrollbars';

import TableItem from './TableItem';
import { sortArray } from './utilise';
import * as actions from './actions';
import './style.less';

const SCROLL_DOWN = 1,
      NAME = "name",
      PRICE = "price",
      WEIGHT = "weight",
      IS_IN_STOCK = "isInStock",
      TEMP = "temp";

class Table extends React.Component {

  handleChengeSortName = (name) => () => {
    this.props.actions.changeSortingTable(name);
  }

  handleUpdate = (event) => {
    if ( event.top === SCROLL_DOWN ) {

      this.props.actions.downloadNextPage();
    }
  }

  componentDidMount() {
    this.props.actions.downloadNextPage();
  }

  render() {
    
    const { data, sortBy, isAscendSort } = this.props

    return (
      <div>
      	<div className="table-header">
      		<div onClick={this.handleChengeSortName('name')}
              className="table-header__column">
            <span>Название</span>
            {
              sortBy === NAME && <div className={isAscendSort ? "arrow-down" : "arrow-upp"} />
            }
          </div>
    			<div onClick={this.handleChengeSortName('price')} 
              className="table-header__column">
            <span>Цена</span>
            {
              sortBy === PRICE && <div className={isAscendSort ? "arrow-down" : "arrow-upp"} />
            }
          </div>
    			<div onClick={this.handleChengeSortName('weight')} 
            className="table-header__column">
            <span>Вес</span>
            {
              sortBy === WEIGHT && <div className={isAscendSort ? "arrow-down" : "arrow-upp"} />
            }
          </div>
    			<div className="table-header__column without-cursor">
            <span>Наличие на складе</span>
            {
              sortBy === IS_IN_STOCK && <div className={isAscendSort ? "arrow-down" : "arrow-upp"} />
            }
          </div>
    			<div onClick={this.handleChengeSortName('temp')} 
            className="table-header__column">
            <span>Темпиратура хранения</span>
            {
              sortBy === TEMP && <div className={isAscendSort ? "arrow-down" : "arrow-upp"} />
            }
          </div>
      	</div>
        <Scrollbars style={{height: '400px'}}
          onUpdate={this.handleUpdate} >
          {
            data.map(({name, price, isInStock, weight, temp}, index) => {
              return <TableItem 
                        key={index}
                        name={name}
                        price={price}
                        isInStock={isInStock}
                        weight={weight}
                        temp={temp} />
            })
          }
        </Scrollbars>
      </div>
    )
  }
}   

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    weight: PropTypes.number,
    isInStock: PropTypes.bool,
    temp: PropTypes.number
  })).isRequired,
}

export default connect(
  (store) => ({
    sortBy: store.table.sortBy,
    isAscendSort: store.table.isAscendSort,
    data: store.table.data.sort(sortArray(store.table.sortBy, store.table.isAscendSort)),
  }),

  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Table);