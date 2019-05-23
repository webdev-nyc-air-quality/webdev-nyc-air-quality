const getActiveDatasetIndex = datasets =>
  datasets.findIndex(dataset => dataset.active)

const getActiveDataset = datasets => datasets.find(dataset => dataset.active)

export { getActiveDataset, getActiveDatasetIndex }
