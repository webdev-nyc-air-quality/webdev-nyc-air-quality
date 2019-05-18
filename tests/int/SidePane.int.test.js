import React from 'react'
import { render, cleanup } from 'react-testing-library'

import SidePane from '../../src/components/SidePane'

afterEach(cleanup)

describe('SidePane component', () => {
  const props = {
    datasets: [
      { name: 'ds1', description: 'd1'},
      { name: 'ds2', description: 'd2'},
      { name: 'ds3', description: 'd3'},
      { name: 'ds4', description: 'd4'},
      { name: 'ds5', description: 'd5'}
    ],
    setActiveTab: jest.fn(),
    activeKey: 2,
    activeDatasetIndex: 2,
    setActiveDataset: jest.fn()
  }

  test('should contain the three tabs', () => {
    const { container } = render(
      <SidePane {...props} />
    )
    const tabs = container.querySelectorAll('.nav-tabs .nav-item')
    expect(tabs).toHaveLength(3)
  })

  test('should invoke callback when a tab is clicked', () => {
    const { container } = render(
      <SidePane {...props} />
    )
    const tabs = container.querySelectorAll('.nav-tabs .nav-item')
    expect(tabs).toHaveLength(3)
    tabs.forEach(tab => {
      tab.click()
    })
    expect(props.setActiveTab).toHaveBeenCalledTimes(3)
  })
})
