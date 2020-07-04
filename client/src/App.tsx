import React from 'react';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

import Input from './components/Input';
import List from './components/List';
import StockDetail from './components/StockDetail';
import * as styles from './styles/vars';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${styles.BG_COLOR};
  }
  * {
    font-family: 'Roboto', sans-serif;
    color: white;
    border-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  width: 90%;
  padding: 2rem;
  text-align: center;
`;

const Top = styled.div`
  text-align: center;
`;

class App extends React.Component {
  render() {
    return (
      <Top>
        <GlobalStyle />
        <Input />
        <List />
        <Container>
          <StockDetail />
        </Container>
      </Top>
    );
  }
}

export default connect(null, {})(App);
