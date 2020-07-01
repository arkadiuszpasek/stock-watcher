import React from 'react';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

import Input from './components/Input';
import List from './components/List';
import StockDetail from './components/StockDetail';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #425e49;
  }
  * {
    color: white;
  }
`;

const Container = styled.div`
  width: 90%;
  padding: 2rem;
  text-align: center;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Input />
        <List />
        <StockDetail />
      </Container>
    );
  }
}

export default connect(null, {})(App);
