import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Map from '../components/Map'
import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <p>Create a new account: <Link to="/app/signup">Sign Up</Link></p>
    <Link to="/app/login">Sign In</Link><br />
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/profile">Your profile</Link>
    <Map />
  </Layout>
)

export default IndexPage
