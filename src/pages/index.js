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
    activeDatasetIndex: '0',
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

  constructor (props) {
    super(props)
    this.setActiveDataset = this.setActiveDataset.bind(this)
  }

  setActiveDataset (e) {
    const index = this.state.datasets.findIndex(
      ({ name }) => name === e.target.textContent
    )
    this.setState({
      ...this.state,
      activeDatasetIndex: index,
    })
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
            <SidePane
              datasets={this.state.datasets}
              activeDatasetIndex={this.state.activeDatasetIndex}
              setActiveDataset={this.setActiveDataset}
            />
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default IndexPage
