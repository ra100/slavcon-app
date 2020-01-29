import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import {Modal} from './Modal'

describe('Modal', () => {
  it('should render', () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<Modal message="Hello, jester!" />, container)
    const button = container.querySelector('[test-id="modal"] button')
    expect(button && button.textContent).toBe('Hide cat')
  })
  it('let us click', () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<Modal message="Hello, jester!" />, container)
    const button = container.querySelector('[test-id="modal"] button')
    if (!button) {
      throw new Error('uff.. button is missing')
    }
    TestUtils.Simulate.click(button)
    expect(button.textContent).toBe('Show cat')
  })
})
