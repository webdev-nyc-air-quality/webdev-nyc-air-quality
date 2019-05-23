import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import userAvatar from '../../img/user-avatar.png'

const CommentList = () => (
  <>
    {comments.map(({ displayName, date, text }, index) => (
      <Card key={index} style={styles.card}>
        <Card.Title style={styles.cardTitle}>
          <Row>
            <Col xs={3}>
              <span>{displayName}</span>
            </Col>
            <Col>
              <span style={styles.date} className='text-muted'>
                {date}
              </span>
            </Col>
          </Row>
        </Card.Title>
        <Card.Text>
          <Row className='no-gutters'>
            <Col xs={2}>
              <img
                src={userAvatar}
                alt='user-avatar'
                style={styles.userAvatar}
                className='mx-auto d-block'
              />
            </Col>
            <Col>{text}</Col>
          </Row>
        </Card.Text>
      </Card>
    ))}
  </>
)

const comments = [
  {
    displayName: 'Sarah R.',
    date: '2019-05-23',
    text:
      "Couldn't understand what the colors meant. Could someone explain the legend...",
  },
  {
    displayName: 'Tom C.',
    date: '2019-05-22',
    text: 'Woah, I never heard of some of these cultural sites.',
  },
  {
    displayName: 'Jenny L.',
    date: '2019-05-21',
    text: 'I wonder why the Lower East Side has so few cultural sites',
  },
]

const styles = {
  card: {
    padding: '0.5rem 0',
  },
  cardTitle: {
    margin: 0,
  },
  date: {
    fontSize: '1rem',
  },
  userAvatar: {
    width: '3rem',
  },
}

export default CommentList
