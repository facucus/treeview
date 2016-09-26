import React from 'react'
import ReactDom from 'react-dom'
import { TreeView } from 'components'

const tree = {
  label: 'Node Label',
  items: [
    {
      label: 'Child Node Label',
      items: [
        {
          label: 'Child Node Label',
          items: [
            {
              label: 'Child Node Label',
              items: [

              ],
            },
            {
              label: 'Child Node Label',
            },
            {
              label: 'Leaf Node Label',
            },
          ],
        },
      ],
    },
    {
      label: 'Leaf Node Label',
    },
  ],
}

ReactDom.render(<TreeView node={tree}/>, document.getElementById('app'))
