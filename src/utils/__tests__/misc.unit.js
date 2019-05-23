import { getActiveDataset, getActiveDatasetIndex } from '../misc'

const datasets = [
  { name: 'd1', active: false },
  { name: 'd2', active: false },
  { name: 'd3', active: false },
]

describe('getActiveDatasetIndex', () => {
  test('should return correct index when one dataset is active', () => {
    for (let i = 0; i < datasets.length; i++) {
      datasets.forEach(dataset => (dataset.active = false))
      datasets[i].active = true
      expect(getActiveDatasetIndex(datasets)).toBe(i)
    }
  })

  test('should return first index if multiple datasets are active', () => {
    datasets.forEach(dataset => (dataset.active = false))
    datasets[0].active = true
    datasets[2].active = true
    expect(getActiveDatasetIndex(datasets)).toBe(0)
  })

  test('should return -1 if there are no active datasets', () => {
    datasets.forEach(dataset => (dataset.active = false))
    expect(getActiveDatasetIndex(datasets)).toBe(-1)
  })
})

describe('getActiveDataset', () => {
  let expectedDataset
  test('should return correct dataset when one dataset is active', () => {
    for (let i = 0; i < datasets.length; i++) {
      datasets.forEach(dataset => (dataset.active = false))
      datasets[i].active = true
      expectedDataset = datasets[i]
      expect(getActiveDataset(datasets)).toBe(expectedDataset)
    }
  })

  test('should return first dataset if multiple datasets are active', () => {
    datasets.forEach(dataset => (dataset.active = false))
    datasets[0].active = true
    datasets[2].active = true
    expectedDataset = datasets[0]
    expect(getActiveDataset(datasets)).toBe(expectedDataset)
  })

  test('should return undefined if there are no active datasets', () => {
    datasets.forEach(dataset => (dataset.active = false))
    expect(getActiveDataset(datasets)).toBeUndefined()
  })
})
