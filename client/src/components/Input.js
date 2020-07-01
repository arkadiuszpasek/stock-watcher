import React from 'react';
import { connect } from 'react-redux';
import { updateInput, fetchDailyEntries } from '../actions';

class Input extends React.Component {
  onInputChange = (e) => {
    const input = e.target.value;
    this.props.updateInput(input);
  };

  onButtonClick = () => {
    this.props.fetchDailyEntries(this.props.input);
  };

  render() {
    return (
      <>
        <label>ss</label>
        <input onChange={this.onInputChange}></input>
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
  fetchDailyEntries,
})(Input);
