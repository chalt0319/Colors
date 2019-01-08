import React, { Component } from 'react';
import Color from './color.js'
import SelectedColor from './selected_color.js'


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
        <div className="selected">Selected Color:</div>
        <SelectedColor />
      </div>
    );
  }
}

export default Header;
