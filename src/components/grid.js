import React, { Component } from 'react';
import Color from './color.js'
import SelectedColor from './selected_color.js'
import GridBox from './gridBox.js'


class Grid extends Component {

  render() {
    return (
      <div >
      <GridBox/>
      <GridBox/>
      <GridBox/>
      <GridBox/>
      <GridBox/>
      <GridBox/>
      <GridBox/>
      <GridBox/>
      <GridBox/>
      <GridBox/>
      </div>
    );
  }
}

export default Grid;
