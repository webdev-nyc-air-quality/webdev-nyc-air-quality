import React from 'react'
import { Link } from 'gatsby'

const Home = () => (
  <div>
    <h1>Home</h1>
    <p>
      <span id='greeting'>You are now logged in!</span>&nbsp;
      <Link to='/app/profile'>View profile</Link>
    </p>
  </div>
)

export default Home
