import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { State } from '../types';
import StockTable from './StockTable';
import Loader from './Loader';

const Label = styled.p`
  margin: 0.75rem 0;
`;

interface PropsInterface {
  stock: {
    ticker: string;
    views: number;
    data: Object;
    loading: boolean;
  };
}

class StockDetail extends React.Component<PropsInterface> {
  renderStock() {
    const {
      stock: { ticker, views, data },
    } = this.props;

    return (
      <div style={{ textAlign: 'center' }}>
        <Label>
          Ammount of searches for {ticker}: {views}
        </Label>
        <Label>Price from last 7 days:</Label>

        <StockTable entries={data}></StockTable>
      </div>
    );
  }

  render() {
    const { stock } = this.props;
    return (
      <div>
        {stock.loading ? <Loader /> : stock.data ? this.renderStock() : ''}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  stock: state.stock,
});

export default connect(mapStateToProps, {})(StockDetail);
