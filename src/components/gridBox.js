import React, { Component } from 'react';
import { connect } from 'react-redux';

class GridBox extends Component {

  state = {  // we start the grid boxes as white, you can change it to the selected color when clicked
    color: "white"
  }

  handleClick = () => {  // on click, it will update the local state to the Redux stores state
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

const mapStateToProps = state => {  // this will allow us to access the state of the Redux store
  return {
    color: state,
  }
}

// this will connect us to the Redux store
export default connect(mapStateToProps)(GridBox)
