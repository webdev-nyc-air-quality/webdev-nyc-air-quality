import React, { Component } from 'react'
import Amplify from 'aws-amplify'
import { Row, Col } from 'react-bootstrap'
import { graphql } from 'gatsby'

import config from '../aws-exports'
import Layout from '../components/layout'
import Plots from '../components/Plots'
import SidePane from '../components/SidePane'

Amplify.configure(config)

class IndexPage extends Component {
  state = {
    activeTab: 'list',
    subpageTitle: 'Dataset-1',
    datasets: [
      {
        name: 'Dataset-1',
        description: 'A short description of dataset-1',
        active: true,
      },
      {
        name: 'Dataset-2',
        description: 'A short description of dataset-2',
        active: false,
      },
      {
        name: 'Dataset-3',
        description: 'A short description of dataset-3',
        active: false,
      },
      {
        name: 'Dataset-4',
        description: 'A short description of dataset-4',
        active: false,
      },
    ],
    mapOptions: {
      zoom: 12,
      center: {
        lat: 40.7128,
        lng: -73.9352,
      },
    },
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
    const datasets = [...this.state.datasets]
    datasets.forEach(dataset => (dataset.active = false))
    datasets[index].active = true

    this.setState({
      ...this.state,
      subpageTitle: datasetName,
      datasets,
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
            <Plots
              data={this.props.data}
              datasets={this.state.datasets}
              mapOptions={this.state.mapOptions}
            />
          </Col>
          <Col xs={4}>
            <SidePane
              activeTab={this.state.activeTab}
              setActiveTab={this.setActiveTab}
              datasets={this.state.datasets}
              activeDatasetIndex={this.state.datasets.findIndex(
                dataset => dataset.active
              )}
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
    allCulturalInstitutionsJson {
      nodes {
        Organization_Name
        Preferred_Address_Line_1
        Borough
        Community_Board
        position {
          lat
          lng
        }
      }
    }
  }
`

export default IndexPage
