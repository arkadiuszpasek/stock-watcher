import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { updateInput, fetchStock, startStockLoad } from '../actions';
import * as styles from '../styles/vars';

const InputElement = styled.input`
  background-color: #f3f3f3;
  color: ${styles.PRIMARY_DARK};
  padding: 0.5rem 1rem;
  border-radius: ${styles.BORDER_RADIUS};
  margin: 1.5rem 0.5rem 0.5rem;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${styles.COMPLEMENTARY_COLOR};
  padding: 0.5rem 1.5rem;
  border-radius: ${styles.BORDER_RADIUS};
  border: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f3f3;
    color: black;
    cursor: pointer;
  }
`;

class Input extends React.Component {
  onInputChange = (e) => {
    const { updateInput } = this.props;
    const input = e.target.value.toUpperCase();
    updateInput(input);
  };

  onButtonClick = () => {
    const { startStockLoad } = this.props;
    this.props.fetchStock(this.props.input);
    startStockLoad();
  };

  render() {
    return (
      <div>
        <InputElement
          onChange={this.onInputChange}
          placeholder="Enter stock ticker"
          value={this.props.input}
        ></InputElement>
        <Button onClick={this.onButtonClick}>Search</Button>
      </div>
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
  startStockLoad,
})(Input);
