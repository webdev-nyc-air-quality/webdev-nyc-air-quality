import React from 'react'
import { Link } from 'gatsby'

const Home = () => <div>
  <h1>Home</h1>
	<p>You are now logged in! <Link to="/app/profile">View profile</Link></p>
	</div>

export default Home