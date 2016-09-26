import React from 'react'
import sd from 'skin-deep'

export function shallowRender (Component, props = {}) {
  let tree = sd.shallowRender(React.createElement(Component, props))
  return {
    instance: tree.getMountedInstance(),
    tree,
  }
}
