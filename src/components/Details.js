import React from 'react'
import { Link } from 'gatsby'
import { getCurrentUser } from '../utils/auth'
import GoogleMap from '../components/GoogleMap'

const Home = () => {
  const user = getCurrentUser()
  console.log('user:', user)
  return (
    <div>
      <h1>Profile Details</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone_number}</p>
      <p>Username: {user.username}</p>
      <Link to="/app/home">Home</Link>

      {/* <form>
        <label>
          First Name
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name
          <input type="text" name="lastName" />
          </label>
          <button type="submit">Submit</button>
      </form> */}

      <GoogleMap />
    </div>
  )
}

export default Home
