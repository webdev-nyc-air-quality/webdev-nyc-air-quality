import React from 'react'

const GeocodeForm = ({
  handleAddressInputChange,
  handleAddressSubmit,
  addressInput,
  outputLocation,
}) => (
  <div>
    <h4>Map center</h4>
    <p>
      {outputLocation && (
        <span>{`lat: ${outputLocation.lat}, lng: ${outputLocation.lng}`}</span>
      )}
    </p>
    <form onSubmit={handleAddressSubmit}>
      <input
        type='text'
        name='address'
        value={addressInput}
        onChange={handleAddressInputChange}
        placeholder='address'
      />
      <button type='submit'>Re-center map</button>
    </form>
  </div>
)

export default GeocodeForm
