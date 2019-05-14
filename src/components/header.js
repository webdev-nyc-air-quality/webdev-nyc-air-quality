import React from 'react'
import { navigate } from 'gatsby'
import { Auth } from 'aws-amplify'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import { logout, isLoggedIn } from '../utils/auth'

const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
    <Navbar.Brand style={styles.brand} onClick={() => navigate('/')}>
      Neighborhood Data
    </Navbar.Brand>
    <Nav className='mr-auto'>
      <Nav.Item className='text-secondary'>
        Dataset: cultural institutions
      </Nav.Item>
    </Nav>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='mr-auto' />
      {isLoggedIn() ? (
        <Nav>
          <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
            <NavDropdown.Item
              style={styles.blue}
              onClick={() =>
                Auth.signOut()
                  .then(logout(() => navigate('/')))
                  .catch(err => console.log('eror:', err))
              }
            >
              Logout
            </NavDropdown.Item>
            <NavDropdown.Item style={styles.blue} onClick={() => navigate('/')}>
              Data sources
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      ) : (
        <Nav>
          <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
            <NavDropdown.Item
              style={styles.blue}
              onClick={() => navigate('/app/signup')}
            >
              Register
            </NavDropdown.Item>
            <NavDropdown.Item
              style={styles.blue}
              onClick={() => navigate('/app/login')}
            >
              Login
            </NavDropdown.Item>
            <NavDropdown.Item style={styles.blue} onClick={() => navigate('/')}>
              Data sources
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      )}
    </Navbar.Collapse>
  </Navbar>
)

const styles = {
  brand: {
    cursor: 'pointer',
  },
  blue: {
    color: '#007bff',
  },
}

export default Header
