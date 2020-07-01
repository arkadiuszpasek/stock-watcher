import React from 'react';
import { connect } from 'react-redux';
import { State } from '../types';

class StockDetail extends React.Component {
  renderStock() {
    return <div>{this.props.stock.ticker}</div>;
  }

  render() {
    return <div>{this.renderStock()}</div>;
  }
}

const mapStateToProps = (state: State) => ({
  stock: state.stock,
});

export default connect(mapStateToProps, {})(StockDetail);
