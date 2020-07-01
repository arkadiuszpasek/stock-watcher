import React from 'react';
import { connect } from 'react-redux';
import { updateInput, fetchStock } from '../actions';

class Input extends React.Component {
  onInputChange = (e) => {
    const input = e.target.value;
    this.props.updateInput(input);
  };

  onButtonClick = () => {
    this.props.fetchStock(this.props.input);
  };

  render() {
    return (
      <>
        <input
          onChange={this.onInputChange}
          placeholder="Enter stock ticker"
        ></input>
        <button onClick={this.onButtonClick}>Search</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    input: state.input,
  };
};

export default connect(mapStateToProps, {
  updateInput,
  fetchStock,
})(Input);
