import React, { Component } from 'react'
import Amplify from 'aws-amplify'
import { Row, Col } from 'react-bootstrap'

import config from '../aws-exports'
import Layout from '../components/layout'
import Map from '../components/Map'
import SidePane from '../components/SidePane'

Amplify.configure(config)

class IndexPage extends Component {
  state = {
    datasets: [
      {
        name: 'Dataset-1',
        description: 'A short description of dataset-1',
      },
      {
        name: 'Dataset-2',
        description: 'A short description of dataset-2',
      },
      {
        name: 'Dataset-3',
        description: 'A short description of dataset-3',
      },
      {
        name: 'Dataset-4',
        description: 'A short description of dataset-4',
      },
    ],
  }

  render () {
    return (
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
            <SidePane datasets={this.state.datasets} />
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default IndexPage
