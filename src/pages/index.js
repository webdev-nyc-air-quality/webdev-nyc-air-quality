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
    subpageTitle: 'Cultural Institutions',
    datasets: [
      {
        name: 'Cultural Institutions',
        description: 'Cultural Institutions by block and lot',
        active: true,
        mapOptions: {
          zoom: 12,
          center: {
            lat: 40.8200471,
            lng: -73.9492724,
          },
        },
        addressInput: '',
      },
      {
        name: 'Dataset-2',
        description: 'A short description of dataset-2',
        active: false,
        mapOptions: {
          zoom: 12,
          center: {
            lat: 40.8447819,
            lng: -73.8648268,
          },
        },
        addressInput: '',
      },
      {
        name: 'Dataset-3',
        description: 'A short description of dataset-3',
        active: false,
        mapOptions: {
          zoom: 12,
          center: {
            lat: 40.7282239,
            lng: -73.7948516,
          },
        },
        addressInput: '',
      },
      {
        name: 'Dataset-4',
        description: 'A short description of dataset-4',
        active: false,
        mapOptions: {
          zoom: 12,
          center: {
            lat: 40.5795317,
            lng: -74.1502007,
          },
        },
        addressInput: '',
      },
    ],
  }

  constructor (props) {
    super(props)
    this.setActiveTab = this.setActiveTab.bind(this)
    this.setActiveDataset = this.setActiveDataset.bind(this)
    this.handleAddressInputChange = this.handleAddressInputChange.bind(this)
    this.handleAddressSubmit = this.handleAddressSubmit.bind(this)
    this.doGeocodeAndUpdateMap = this.doGeocodeAndUpdateMap.bind(this)
  }

  setActiveTab (tabName) {
    this.setState({ activeTab: tabName })
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
      subpageTitle: datasetName,
      datasets,
    })
  }

  handleAddressInputChange (event) {
    const datasets = [...this.state.datasets]
    const index = datasets.findIndex(dataset => dataset.active)
    const dataset = datasets[index]
    dataset.addressInput = event.target.value
    this.setState({ datasets })
  }

  handleAddressSubmit (event) {
    event.preventDefault()
    const index = this.state.datasets.findIndex(dataset => dataset.active)
    const addressInput = this.state.datasets[index].addressInput
    if (addressInput) this.doGeocodeAndUpdateMap(addressInput)
    else console.log('Address is required for form submission')
  }

  doGeocodeAndUpdateMap (address) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${
        process.env.GATSBY_GMAPS_API_KEY
      }`
    )
      .then(res => res.json())
      .then(
        result => {
          const outputLocation = result.results.length
            ? result.results[0].geometry.location
            : false
          const datasets = [...this.state.datasets]
          const index = datasets.findIndex(dataset => dataset.active)
          const dataset = datasets[index]
          dataset.mapOptions = {
            zoom: 12,
            center: outputLocation,
          }
          this.setState({ datasets })
        },
        error => {
          const datasets = [...this.state.datasets]
          const index = datasets.findIndex(dataset => dataset.active)
          const dataset = datasets[index]
          dataset.mapOptions = {
            zoom: 12,
            center: false,
          }
          this.setState({ datasets })
        }
      )
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
              indexQueryData={this.props.data}
              datasets={this.state.datasets}
            />
          </Col>
          <Col xs={4}>
            <SidePane
              handleAddressInputChange={this.handleAddressInputChange}
              handleAddressSubmit={this.handleAddressSubmit}
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
