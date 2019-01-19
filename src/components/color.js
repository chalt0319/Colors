import React, { Component } from 'react';
import { connect } from 'react-redux';

class Color extends Component {

  handleClick = () => {
    // when a color is clicked, it will send that info to the store to update the state
    this.props.dispatch({type: 'CHANGE_COLOR', color: this.props.color})
  }

  render() {
    // this will pull in the color of the state, so that when it's changed, it will update
    return (
      <div className={`${this.props.color} square`} onClick={this.handleClick}>

      </div>
    );
  }
}

export default connect()(Color)
