import React from 'react'

const GeocodeForm = ({
  handleAddressInputChange,
  handleAddressSubmit,
  outputLocation,
}) => (
  <div>
    <h4>Enter address:</h4>
    <form onSubmit={handleAddressSubmit}>
      <input type='text' name='address' onChange={handleAddressInputChange} />
      <button type='submit'>Submit</button>
    </form>
    <h4>Output:</h4>
    <p>
      {outputLocation && (
        <span>{`lat: ${outputLocation.lat}, lng: ${outputLocation.lng}`}</span>
      )}
    </p>
  </div>
)

export default GeocodeForm
