import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchAllStocks, fetchStock } from '../actions';
import { State } from '../types';

const StocksList = styled.ul``;

const ListItem = styled.li`
  padding: 0.4rem 1.2rem;
  margin: 0.5rem;
  border-radius: 15%;
  cursor: pointer;
  background: #f3f3f3;
  color: black;
  display: inline;
  transition: all 0.3s ease;

  &:hover {
    background: red;
  }
`;

class List extends React.Component {
  componentDidMount() {
    this.props.fetchAllStocks();
  }

  onStockClick = (stock: string) => {
    this.props.fetchStock(stock);
  };

  renderList = () => {
    const { stocks } = this.props;

    if (!stocks || stocks.length <= 0) {
      return;
    }

    return stocks.map(
      (stock: { _id: string; views: number; ticker: string }) => {
        return (
          <ListItem
            key={stock._id}
            onClick={() => this.onStockClick(stock.ticker)}
          >
            {stock.ticker}
          </ListItem>
        );
      },
    );
  };

  render() {
    return (
      <>
        <StocksList>{this.renderList()}</StocksList>
      </>
    );
  }
}

const mapStateToProps = (state: { stocksList: State }) => {
  return {
    stocks: state.stocksList,
  };
};

export default connect(mapStateToProps, {
  fetchAllStocks,
  fetchStock,
})(List);
