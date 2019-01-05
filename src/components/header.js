import React, { Component } from 'react';
import Color from './color.js'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Color color="red"/>
        <Color color="orange"/>
        <Color color="yellow"/>
        <Color color="green"/>
        <Color color="blue"/>
        <Color color="purple"/>
        <Color color="white"/>
        <Color color="black"/>
      </div>
    );
  }
}

export default Header;
