import React from 'react'
import { render, cleanup } from 'react-testing-library'

import DatasetList from '../../src/components/DatasetList'

afterEach(cleanup)

describe('DatasetList component', () => {
  const props = {
    datasets: [
      { name: 'ds1', description: 'd1'},
      { name: 'ds2', description: 'd2'},
      { name: 'ds3', description: 'd3'},
      { name: 'ds4', description: 'd4'},
      { name: 'ds5', description: 'd5'}
    ],
    activeDatasetIndex: 2,
    setActiveDataset: jest.fn()
  }

  test('should render a card for each dataset', () => {
    const { container } = render(
      <DatasetList {...props} />
    )
    const cards = container.querySelectorAll('div.card')
    expect(cards).not.toBeNull()
    expect(cards).toHaveLength(props.datasets.length)
  })

  test('should contain names and descriptions of datasets', () => {
    const { container } = render(
      <DatasetList {...props} />
    )
    const cards = container.querySelectorAll('div.card')
    expect(cards).not.toBeNull()
    expect(cards).toHaveLength(props.datasets.length)
    cards.forEach((card, index) => {
      const actualName = card.querySelector('.btn').textContent
      const actualDescription = card.querySelector('.card-body').textContent
      expect(actualName).toBe(props.datasets[index].name)
      expect(actualDescription).toBe(props.datasets[index].description)
    })
  })

  test('should invoke callback on click', () => {
    const { container } = render(
      <DatasetList {...props} />
    )
    const buttons = container.querySelectorAll('.stretched-link.btn.btn-link')
    expect(buttons).not.toBeNull()
    expect(buttons).toHaveLength(props.datasets.length)
    buttons[2].click()
    expect(props.setActiveDataset).toHaveBeenCalled()
  })
})
