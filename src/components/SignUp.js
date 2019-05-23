import React from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import Error from './Error'
import { Auth } from 'aws-amplify'
import { Form, Button } from 'react-bootstrap'

const initialState = {
  username: ``,
  password: ``,
  email: '',
  phone_number: '',
  authCode: '',
  stage: 0,
  error: '',
}

class SignUp extends React.Component {
  state = initialState

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  signUp = async () => {
    const { username, password, email, phone_number } = this.state
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, phone_number },
      })
      this.setState({ stage: 1 })
    } catch (err) {
      this.setState({ error: err })
      console.log('error signing up...', err)
    }
  }

  confirmSignUp = async () => {
    const { username, authCode } = this.state
    try {
      await Auth.confirmSignUp(username, authCode)
      alert('Successfully signed up!')
      navigate('/app/login')
    } catch (err) {
      this.setState({ error: err })
      console.log('error confirming signing up...', err)
    }
  }

  render () {
    return (
      <div>
        <Form style={styles.signupContainer}>
          <h1>Sign Up</h1>
          {this.state.stage === 0 && (
            <div style={styles.formContainer}>
              {this.state.error && <Error errorMessage={this.state.error} />}
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={this.handleUpdate}
                  placeholder='Username'
                  name='username'
                  value={this.state.username}
                >
                  {/* <input
                  onChange={this.handleUpdate}
                  placeholder='Username'
                  name='username'
                  value={this.state.username}
                  style={styles.input}
                /> */}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={this.handleUpdate}
                  placeholder='Password'
                  name='password'
                  type='password'
                  value={this.state.password}
                />
              </Form.Group>
              {/* <input
              onChange={this.handleUpdate}
              placeholder='Password'
              name='password'
              value={this.state.password}
              type='password'
              style={styles.input}
            /> */}
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={this.handleUpdate}
                  placeholder='Email'
                  name='email'
                  value={this.state.email}
                />
              </Form.Group>

              {/* <input
              onChange={this.handleUpdate}
              placeholder='Email'
              name='email'
              value={this.state.email}
              style={styles.input}
            /> */}
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  onChange={this.handleUpdate}
                  placeholder='Phone Number'
                  name='phone_number'
                  value={this.state.phone_number}
                />
              </Form.Group>
              {/* <input
              onChange={this.handleUpdate}
              placeholder='Phone Number'
              name='phone_number'
              value={this.state.phone_number}
              style={styles.input}
            /> */}
              {/* <div style={styles.button} onClick={this.signUp}>
              <span style={styles.buttonText}>Sign Up</span>
            </div> */}
              <Button onClick={this.signUp}>Sign Up</Button>
              <br />
            </div>
          )}
          {this.state.stage === 1 && (
            <div style={styles.formContainer}>
              {this.state.error && <Error errorMessage={this.state.error} />}
              <Form.Group>
                <Form.Label>Authorization Code</Form.Label>
                <Form.Control
                  onChange={this.handleUpdate}
                  placeholder='Authorization Code'
                  name='authCode'
                  value={this.state.authCode}
                />
              </Form.Group>

              {/* <input
              onChange={this.handleUpdate}
              placeholder='Authorization Code'
              name='authCode'
              value={this.state.authCode}
              style={styles.input}
            /> */}
              {/* <div style={styles.button} onClick={this.confirmSignUp}>
              <span style={styles.buttonText}>Confirm Sign Up</span>
            </div> */}
              <Button onClick={this.confirmSignUp}>Confirm Sign Up</Button>
            </div>
          )}

          <Button>
            Sign In
            <Link to='/app/login' />
          </Button>
        </Form>
      </div>
    )
  }
}

const styles = {
  signupContainer: {
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

export default SignUp
