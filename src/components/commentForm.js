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
        <Form.Row>
          <Col>
            <Form.Control placeholder='First name' />
          </Col>
          <Col>
            <Form.Control placeholder='Last name' />
          </Col>
        </Form.Row>

        <Button type='submit'>Submit form</Button>
      </Form>
    )
  }
}
export default CommentForm
