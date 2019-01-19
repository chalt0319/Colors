import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedColor extends Component {
  render() {

    return (  // this will change colors based on which colors you select in the header
      <div className={`${this.props.color} square`}>
      </div>
    );
  }
}

const mapStateToProps = state => {  // this will allow us to access the Redux store to get the state
  return {
    color: state,
  }
}

// this connects us to the Redux store
export default connect(mapStateToProps)(SelectedColor)
