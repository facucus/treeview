import React, { Component, PropTypes } from 'react'
import { NodeItem } from 'components'
import classNames from 'classnames/bind'
import { listItem, nodeItem, nodeItemUp, nodeItemDown } from './styles.css'


const styles = {
  nodeItem,
  nodeItemUp,
  nodeItemDown,
}

const cx = classNames.bind(styles)

class TreeView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    this.setState({visible: !this.state.visible})
  }

  render () {
    let item
    let objectClass
    const style = (!this.state.visible) ? {display: 'none'} : null
    const { node } = this.props

    if (node.items != null) {
      item = node.items.map((node, index) => {
        return <li key={index} className={listItem}><TreeView node={node} /></li>
      })

      objectClass = cx({
        nodeItem: node.items.length,
        nodeItemDown: this.state.visible && node.items.length,
        nodeItemUp: !this.state.visible && node.items.length,
      })
    }

    return (
      <div>
        <NodeItem
          text={ node.label }
          onToggle={ this.handleToggle }
          classStyles={ classNames(objectClass) }/>
        <ul style={ style }>
          { item }
        </ul>
      </div>
    )
  }
}

TreeView.propTypes = {
  node: PropTypes.object.isRequired,
}

export default TreeView
