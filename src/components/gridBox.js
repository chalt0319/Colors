import React, { Component } from 'react';
import { connect } from 'react-redux';

class GridBox extends Component {

  state = {
    color: "white"
  }

  handleClick = () => {
    this.setState({
      color: this.props.color
    })
  }

  render() {

    return (
      <div className={`${this.state.color} box`} onClick={this.handleClick}>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    color: state,
  }
}

export default connect(mapStateToProps)(GridBox)
