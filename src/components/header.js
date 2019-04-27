import React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { logout, isLoggedIn } from "../utils/auth"
import { Auth } from 'aws-amplify'
import Hamburger from '../components/Hamburger'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'SteelBlue',
      /* marginBottom: '1.45rem', */
    }}
  >
    <div
      /* style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }} */
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={styles.headerTitle}
        >
          {siteTitle}
        </Link>
      </h1>
      <h4 style={{ color: 'white', margin: 0 }}>
        Dataset: Lorem ipsum dolor
      </h4>
      {
        isLoggedIn() && (
          <p
            onClick={
              () => Auth.signOut().then(logout(() => navigate('/app/login'))).catch(err => console.log('eror:', err))
            }
            style={styles.link}
          >Sign Out</p>
        )
      }
      <Hamburger />
    </div>
  </div>
)

const styles = {
  headerTitle: {
    color: 'white',
    textDecoration: 'none',
  },
  link: {
    cursor: 'pointer',
    color: 'white',
    textDecoration: 'underline'
  }
}

export default Header
