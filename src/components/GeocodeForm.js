import React from 'react'

const GeocodeForm = ({ handleChange, handleSubmit, outputLocation }) => (
  <div>
    <h4>Enter address:</h4>
    <form onSubmit={handleSubmit}>
      <input type='text' name='address' onChange={handleChange} />
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
