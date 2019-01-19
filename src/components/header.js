import React, { Component } from 'react';
import Color from './color.js'
import SelectedColor from './selected_color.js'


class Header extends Component {

  timer = () => {  // this will add a timer to the page that resets when you refresh
    let num = 1
    setInterval(frame, 1000)
    function frame(){
      document.getElementById('timer').innerHTML = num
      num++
    }
  }

  render() {
    return (  // this will make up the colors you can select in the header
      <div className="header">
        {this.timer()}
        <div id="time_elapsed">Time Elapsed: </div>
        <div id="timer">0</div>
        <Color color="pink"/>
        <Color color="red"/>
        <Color color="orange"/>
        <Color color="yellow"/>
        <Color color="lime"/>
        <Color color="green"/>
        <Color color="aqua"/>
        <Color color="blue"/>
        <Color color="violet"/>
        <Color color="purple"/>
        <div className="white_space"></div>
        <Color color="white"/>
        <Color color="black"/>
        <Color color="brown"/>
        <div id="selected_color">
          <div className="selected">Selected Color:</div>
          <SelectedColor />
        </div>

      </div>
    );
  }
}

export default Header;
