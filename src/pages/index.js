import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    <h1>Webdev-nyc-air-quality</h1>
    <p>Welcome to our site, you can view all the available data about your neighborhood!</p>
    <p>Create a new account: <Link to="/app/signup">Sign Up</Link></p>
    <Link to="/app/login">Sign In</Link><br />
    <Link to="/app/home">Home</Link><br />
    <Link to="/app/profile">Your profile</Link>
  </Layout>
)

export default IndexPage
