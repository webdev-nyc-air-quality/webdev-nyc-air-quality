import React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { setUser, isLoggedIn } from '../utils/auth'
import Error from './Error'
import { Auth } from 'aws-amplify'
import { Form, Button } from 'react-bootstrap'

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
    error: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  login = async () => {
    const { username, password } = this.state
    try {
      await Auth.signIn(username, password)
      const user = await Auth.currentAuthenticatedUser()
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      setUser(userInfo)
      navigate('/app/profile')
    } catch (err) {
      this.setState({ error: err })
      console.log('error...: ', err)
    }
  }

  render () {
    if (isLoggedIn()) navigate('/app/profile')
    return (
      <div>
        <Form style={styles.loginContainer}>
          <h1>Sign In</h1>
          {this.state.error && <Error errorMessage={this.state.error} />}
          <div style={styles.formContainer}>
            <Form.Group>
              <Form.Control
                onChange={this.handleUpdate}
                placeholder='Username'
                name='username'
                value={this.state.username}
                id='username-field'
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                onChange={this.handleUpdate}
                placeholder='Password'
                name='password'
                type='password'
                value={this.state.password}
                id='password-field'
              />
            </Form.Group>

            <Button onClick={this.login} id='login-link'>
              Sign In
            </Button>
            <br />
          </div>
          <Button variant='link'>
            <Link to='/app/signup'>Sign Up</Link>
          </Button>
          <br />
        </Form>
      </div>
    )
  }
}

const styles = {
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
    margin: 'auto',
  },
  input: {
    height: 40,
    margin: '10px 0px',
    padding: 7,
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    backgroundColor: 'SteelBlue',
    padding: '15px 7px',
    cursor: 'pointer',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
  },
}

export default Login
