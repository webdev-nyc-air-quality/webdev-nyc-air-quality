import React, { Component } from 'react'
import Amplify from 'aws-amplify'
import { Row, Col } from 'react-bootstrap'
import { graphql } from 'gatsby'

import config from '../aws-exports'
import Layout from '../components/layout'
import Map from '../components/Map'
import SidePane from '../components/SidePane'

Amplify.configure(config)

class IndexPage extends Component {
  state = {
    activeTab: 'list',
    activeDatasetIndex: '0',
    subpageTitle: 'Dataset-1',
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
    this.setActiveTab = this.setActiveTab.bind(this)
    this.setActiveDataset = this.setActiveDataset.bind(this)
  }

  setActiveTab (tabName) {
    this.setState({ ...this.state, activeTab: tabName })
  }

  setActiveDataset (e) {
    const datasetName = e.target.textContent
    const index = this.state.datasets.findIndex(
      ({ name }) => name === datasetName
    )
    this.setState({
      ...this.state,
      activeDatasetIndex: index,
      subpageTitle: datasetName,
    })
  }

  render () {
    return (
      <Layout
        siteTitle={this.props.data.site.siteMetadata.title}
        subpageTitle={this.state.subpageTitle}
      >
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
              activeTab={this.state.activeTab}
              setActiveTab={this.setActiveTab}
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

export const query = graphql`
  query IndexQuery {
    site {
      ...SiteTitle
    }
  }
`

export default IndexPage
