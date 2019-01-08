import React, { Component } from 'react';
import { connect } from 'react-redux';


// const Color = (props) => {
//   return (
//     <div className={`${props.color} square`} onClick={this.handleClick}>
//     </div>
//  )
// }

class Color extends Component {

  handleClick = () => {
    this.props.dispatch({type: 'CHANGE_COLOR', color: this.props.color})
  }

  render() {

    return (
      <div className={`${this.props.color} square`} onClick={this.handleClick}>
      </div>
    );
  }
}

export default connect()(Color)
