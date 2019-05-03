import React from 'react'
import Layout from '../components/layout'
import Map from '../components/Map'
import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <Map />
  </Layout>
)

export default IndexPage
