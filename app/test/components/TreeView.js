import React from 'react'
import { shallowRender } from '../helpers'
import { spy } from 'sinon'
import assert from 'assert'
import { TreeView } from 'components'

describe('TreeView Component', () => {
  const node = {
    label: 'Test text',
    items: [
        {label: 'Test text', item: 'Test object'},
        {label: 'Test text', item: 'Test object'},
    ],
  }

  describe('Output', () => {
    it('It has a TreeView component for each item in Items array', () => {
      const { tree } = shallowRender(TreeView, { node })
      const childs = tree.everySubTree('TreeView')
      assert.equal(childs.length, node.items.length)
    })
    it('It has a NodeItem component', () => {
      const { tree } = shallowRender(TreeView, { node })
      const nodeItem = tree.subTree('NodeItem')
      assert(nodeItem, 'has a NodeItem component')
    })
  })
})
