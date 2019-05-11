import React from 'react'
import Amplify from 'aws-amplify'
import { Row, Col } from 'react-bootstrap'
import config from '../aws-exports'
import Layout from '../components/layout'
import Map from '../components/Map'
import SidePane from '../components/SidePane'
// import Geocode from '../components/geocode'

Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    
    <Row
      style={{
        height: '100%',
      }}
      className='no-gutters'
    >
      <Col xs={8}>
        <Map />
      </Col>
      <Col xs={4}>
        <SidePane />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
