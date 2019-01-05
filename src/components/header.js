import React, { Component } from 'react';
import Color from './color.js'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Color color="red"/>
        <Color color="blue"/>
        <Color color="green"/>
        <Color color="yellow"/>
        <Color color="orange"/>
        <Color color="purple"/>
      </div>
    );
  }
}

export default Header;
