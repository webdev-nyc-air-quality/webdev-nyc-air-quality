import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'

const DatasetList = ({ datasets }) => (
  <Accordion defaultActiveKey='0'>
    {datasets.map(({ name, description }, index) => (
      <Card key={index}>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant='link'
            eventKey={'' + index}
            className='stretched-link'
          >
            {name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={'' + index}>
          <Card.Body>{description}</Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
)

export default DatasetList
