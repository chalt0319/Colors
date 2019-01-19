import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js'
import Grid from './components/grid.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
        <Grid />
      </div>
    );
  }
}

export default App;
