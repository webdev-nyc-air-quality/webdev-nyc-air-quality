import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

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
    <Form onSubmit={handleAddressSubmit}>
      <Row>
        <Col>
          <Form.Control
            type='text'
            name='address'
            value={addressInput}
            onChange={handleAddressInputChange}
            placeholder='address'
            required
          />
        </Col>
        <Col>
          <Button type='submit'>Re-center map</Button>
        </Col>
      </Row>
    </Form>
  </div>
)

export default GeocodeForm
