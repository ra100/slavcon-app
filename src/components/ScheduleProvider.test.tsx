import React from 'react'
import {render, wait} from '@testing-library/react'
import {ScheduleProvider} from './ScheduleProvider'

describe('ScheduleProvider', () => {
  test('should render', async () => {
    const component = render(<ScheduleProvider />)
    await wait(() => {
      component.findByTestId('ScheduleProvider')
    })
    component.debug()
    expect(true).toBe(true)
  })
})
