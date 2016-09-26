import React, { Component, PropTypes } from 'react'

class NodeItem extends Component {
  constructor (props) {
    super (props)
    this.handleOnToggle = this.handleOnToggle.bind(this)
  }
  //this function was added in order to be able to tested with mocha
  handleOnToggle () {
    this.props.onToggle()
  }

  render () {
    return (
      <h4 onClick={ this.handleOnToggle }
        className={ this.props.classStyles }>
        {this.props.text}
      </h4>
    )
  }
}

NodeItem.propTypes = {
  text: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  classStyles: PropTypes.string.isRequired,
}

export default NodeItem;
