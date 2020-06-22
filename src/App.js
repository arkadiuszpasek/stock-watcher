import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Input from './components/Input';
import List from './components/List';

class App extends React.Component {
  componentDidMount() {
    // this.props.childrenupdateInput('gfg');
  }
  render() {
    return (
      <div>
        <Input />
        <List />
      </div>
    );
  }
}

export default connect(null, {})(App);
