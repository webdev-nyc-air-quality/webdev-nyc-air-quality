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
                <Form.Control
                  onChange={this.handleUpdate}
                  placeholder='Username'
                  name='username'
                  value={this.state.username}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  onChange={this.handleUpdate}
                  placeholder='Password'
                  name='password'
                  type='password'
                  value={this.state.password}
                />
                <Form.Text>
                  Your password need to be at lease 8 characters long, and must
                  have uppercase characters(ABC), lowercase characters(abc) and
                  symbol characters(*/?!).
                </Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Control
                  onChange={this.handleUpdate}
                  placeholder='example@mail.com'
                  name='email'
                  value={this.state.email}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  onChange={this.handleUpdate}
                  placeholder='+15555555555'
                  name='phone_number'
                  value={this.state.phone_number}
                />
              </Form.Group>

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

              <Button onClick={this.confirmSignUp}>Confirm Sign Up</Button>
              <br />
            </div>
          )}

          <Button variant='link'>
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
