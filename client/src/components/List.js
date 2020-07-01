import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  renderList = () => {
    const { stock } = this.props;

    if (!stock || !stock['Meta Data']) {
      return;
    }

    console.log(stock);
    const symbol = stock['Meta Data']['2. Symbol'];
    let data = stock['Time Series (Daily)'];

    if (data) {
      return Object.keys(data).map((key, i) => {
        const dateEntry = data[key];
        return (
          <li key={i}>
            Prices for {symbol} at {key}: {dateEntry['2. high']} -{' '}
            {dateEntry['3. low']}
          </li>
        );
      });
    }
  };

  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    stock: state.stock,
  };
};

export default connect(mapStateToProps, {})(List);
