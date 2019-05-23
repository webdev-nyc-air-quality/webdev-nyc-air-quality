import React from 'react'
import { graphql } from 'gatsby'
import { Router } from '@reach/router'

import Layout from '../components/layout'
import Profile from '../components/Profile'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import DataSources from '../components/DataSources'
import PrivateRoute from '../components/PrivateRoute'

const App = ({ data }) => (
  <Layout siteTitle={data.site.siteMetadata.title}>
    <Router>
      <PrivateRoute path='/app/profile' component={Profile} />
      <Login path='/app/login' />
      <SignUp path='/app/signup' />
      <DataSources path='/app/datasources' />
    </Router>
  </Layout>
)

export const query = graphql`
  query AppQuery {
    site {
      ...SiteTitle
    }
  }
`

export default App
