import React from 'react'
import {render, wait} from '@testing-library/react'
import {ScheduleProvider} from './ScheduleProvider'
import mockTimeline from './mockTimeline.json'

// a rather simple mock, you might use something more advanced for your needs
let resolve: any
function fetch() {
  return new Promise((_resolve) => {
    resolve = _resolve
  })
}
;(global as any).fetch = fetch

describe('ScheduleProvider', () => {
  test('should render', async () => {
    const component = render(<ScheduleProvider />)
    resolve({json: () => Promise.resolve(mockTimeline)})
    await wait(() => {
      component.findByTestId('ScheduleProvider')
    })
    expect(component.queryAllByTestId('ScheduleTable')).toHaveLength(1)
  })
  test('should render loading when fetching data', async () => {
    const component = render(<ScheduleProvider />)
    expect(await component.findByTestId('loading')).toBeDefined()
  })
})
