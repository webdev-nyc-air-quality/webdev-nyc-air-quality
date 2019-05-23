import React from 'react'
import Helmet from 'react-helmet'
import { Col, Row } from 'react-bootstrap'

const DataSources = () => (
  <Row style={styles.container}>
    <Col>
      <Helmet title='Data sources' />
      <h1>Data sources</h1>
    </Col>
  </Row>
)

const styles = {
  container: {
    width: '80%',
    margin: '1rem auto',
    border: '1px solid lightgray',
    borderRadius: '5px',
    padding: '0.5rem',
  },
}

export default DataSources
