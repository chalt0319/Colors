import React, { Component } from 'react';
import Color from './color.js'
import SelectedColor from './selected_color.js'
import GridBox from './gridBox.js'


class Grid extends Component {

  render() {  // this will make up the columns 
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
      <GridBox/>
      <GridBox/>
      <GridBox/>
      </div>
    );
  }
}

export default Grid;
