import React from 'react'
import { render, cleanup } from 'react-testing-library'

import SidePane from '../../src/components/SidePane'

afterEach(cleanup)

describe('SidePane component', () => {
  const props = {
    datasets: [
      {
        name: 'Dataset-1',
        description: 'A short description of dataset-1',
        active: true,
        mapOptions: {
          zoom: 12,
          center: {
            lat: 40.8200471,
            lng: -73.9492724,
          },
        },
        addressInput: '',
      },
      {
        name: 'Dataset-2',
        description: 'A short description of dataset-2',
        active: false,
        mapOptions: {
          zoom: 12,
          center: {
            lat: 40.8447819,
            lng: -73.8648268,
          },
        },
        addressInput: '',
      },
      {
        name: 'Dataset-3',
        description: 'A short description of dataset-3',
        active: false,
        mapOptions: {
          zoom: 12,
          center: {
            lat: 40.7282239,
            lng: -73.7948516,
          },
        },
        addressInput: '',
      },
      {
        name: 'Dataset-4',
        description: 'A short description of dataset-4',
        active: false,
        mapOptions: {
          zoom: 12,
          center: {
            lat: 40.5795317,
            lng: -74.1502007,
          },
        },
        addressInput: '',
      },
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
