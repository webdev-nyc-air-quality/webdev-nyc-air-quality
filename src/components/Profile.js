import React from 'react'
import { getCurrentUser } from '../utils/auth'
import { Row, Col } from 'react-bootstrap'

const Profile = () => {
  const styles = {
    profileContainer: {
      width: '80%',
      margin: '1rem auto',
      border: '1px solid lightgray',
      borderRadius: '5px',
      padding: '0.5rem',
    },
  }

  const user = getCurrentUser()
  return (
    <Row style={styles.profileContainer}>
      <Col>
        <h1>Profile</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone_number}</p>
        <p>Username: {user.username}</p>
      </Col>
    </Row>
  )
}

export default Profile
