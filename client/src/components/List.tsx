import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchAllStocks, fetchStock, startStockLoad } from '../actions';
import { State } from '../types';
import * as styles from '../styles/vars';

const StocksList = styled.div`
  // background: ${styles.PRIMARY_GRAY};
  margin: 1rem 0;
  padding: 1rem 3rem;
  text-align: left;
  border-top: 3px dashed ${styles.THIRD_COLOR};
  border-bottom: 3px dashed ${styles.THIRD_COLOR};
`;

const ListItem = styled.li`
  padding: 0.25rem 1rem;
  margin: 0.5rem;
  border-radius: ${styles.BORDER_RADIUS};
  cursor: pointer;
  background: #f3f3f3;
  color: black;
  display: inline-block;
  transition: all 0.2s ease;

  &:hover {
    background: ${styles.COMPLEMENTARY_COLOR};
  }
`;

interface PropsInterface {
  stocks: Array<any>;
  fetchStock: (stock: string) => void;
  fetchAllStocks: () => void;
  startStockLoad: () => void;
}

class List extends React.Component<PropsInterface> {
  componentDidMount() {
    const { fetchAllStocks } = this.props;
    fetchAllStocks();
  }

  onStockClick = (stock: string) => {
    const { fetchStock, startStockLoad } = this.props;
    fetchStock(stock);
    startStockLoad();
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

  renderFrequentStocks = () => {
    const { stocks } = this.props;
    if (!stocks || stocks.length <= 0) {
      return '';
    }

    return (
      <StocksList>
        <h3>Traders' most frequently searched stocks</h3>
        <ul>{this.renderList()}</ul>
      </StocksList>
    );
  };

  render() {
    return <div>{this.renderFrequentStocks()}</div>;
  }
}

const mapStateToProps = (state: State) => {
  return {
    stocks: state.stocksList,
  };
};

export default connect(mapStateToProps, {
  fetchAllStocks,
  fetchStock,
  startStockLoad,
})(List);
