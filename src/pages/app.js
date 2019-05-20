import React from 'react'
import { graphql } from 'gatsby'
import { Router } from '@reach/router'

import Layout from '../components/layout'
import Details from '../components/Details'
import Home from '../components/Home'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import PrivateRoute from '../components/PrivateRoute'

const App = ({ data }) => (
  <Layout siteTitle={data.site.siteMetadata.title}>
    <Router>
      <PrivateRoute path='/app/home' component={Home} />
      <PrivateRoute path='/app/profile' component={Details} />
      <Login path='/app/login' />
      <SignUp path='/app/signup' />
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
