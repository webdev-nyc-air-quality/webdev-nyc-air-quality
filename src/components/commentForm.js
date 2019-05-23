import React from 'react'
import { Button, Col, Form } from 'react-bootstrap'

class CommentForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = { validated: false }
  }
  render () {
    const { validated } = this.state
    return (
      <Form
        noValidate
        validated={validated}
        onSubmit={e => this.handleSubmit(e)}
      >
        <div>
          <br />
          <Form.Row>
            <Col>
              <Form.Control placeholder='First name' />
            </Col>
            <Col>
              <Form.Control placeholder='Last name' />
            </Col>
          </Form.Row>
        </div>
        <div>
          <Form.Label>Select Dataset</Form.Label>
          <Form.Group>
            <Form.Control as='select'>
              <option>Cultural institutions</option>
              <option>New york city collisions</option>
              <option>New York city tubulation areas</option>
              <option>Neighborhood vehicle idling</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
        </div>
        <div className='form-group'>
          <label> Comments</label>
          <textarea className='form-control' rows='5' />
        </div>

        <Button type='submit'>Submit Comment</Button>
      </Form>
    )
  }
}
export default CommentForm
