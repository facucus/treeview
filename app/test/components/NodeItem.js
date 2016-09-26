import React from 'react'
import { shallowRender } from '../helpers'
import { spy } from 'sinon'
import assert from 'assert'
import { NodeItem } from 'components'

describe('NodeItem Component', () => {
  const text = 'Child text'
  const onToggle = spy()
  const classStyles = 'testClass'

  describe('Output', () => {
    it('It has a h4 tag with the correct title', () => {
      const { tree } = shallowRender(NodeItem, {text, onToggle, classStyles})
      const title = tree.everySubTree('h4')
      assert(title, 'Child text')
    })
  })

  describe('Behavior', () => {
    it('Execute onToggle when Child node is clicked', () => {
      const { instance } = shallowRender(NodeItem, {text, onToggle, classStyles})
      instance.handleOnToggle()
      assert.equal(onToggle.calledOnce, true)
    })
  })

})
