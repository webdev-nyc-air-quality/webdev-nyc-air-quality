import React from 'react'

import Layout from '../components/layout'
import LeafletMap from '../components/LeafletMap'
import GeocodeForm from '../components/GeocodeForm'

const GeocodeExperimentPage = () => (
  <Layout>
    Geocode Experiment
    <GeocodeForm />
    <LeafletMap />
  </Layout>
)

export default GeocodeExperimentPage
