import React from 'react'
import { Alert, Button } from 'react-bootstrap'

import CommentForm from './commentForm'

class DiscussionForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true,
      showComponent: false,
    }
    this.onButtonClick = this.onButtonClick.bind(this)
  }
  onButtonClick () {
    this.setState({
      showComponent: true,
    })
  }
  render () {
    const handleHide = () => this.setState({ show: false })
    const handleShow = () => this.setState({ show: true })
    return (
      <div>
        <div>
          <Alert show={this.state.show} variant='secondary'>
            <Alert.Heading>Bob</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum.
            </p>
            <hr />
            <Alert.Heading>Peter</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum.
            </p>
            <hr />
            <Alert.Heading>jane</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum.
            </p>
            <div className='d-flex justify-content-end'>
              <Button onClick={handleHide} variant='outline-primary'>
                Hide
              </Button>
              <Button variant='outline-primary'>Show more Comments</Button>
            </div>
          </Alert>
          {!this.state.show && (
            <Button onClick={handleShow} variant='outline-primary'>
              Show Comments
            </Button>
          )}
        </div>
        <br />
        <div>
          <Button
            onClick={this.onButtonClick}
            variant='outline-primary'
            size='lg'
            block
          >
            Add Comments
          </Button>
          {this.state.showComponent ? <CommentForm /> : null}
        </div>
      </div>
    )
  }
}
export default DiscussionForm
