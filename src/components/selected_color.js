import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedColor extends Component {
  render() {

    return (
      <div className={`${this.props.color} square`}>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    color: state,
  }
}

export default connect(mapStateToProps)(SelectedColor)
