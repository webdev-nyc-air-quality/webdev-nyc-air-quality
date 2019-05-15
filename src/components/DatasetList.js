import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'

const datasets = [
  {
    name: 'Dataset-1',
    description: 'A short description of dataset-1',
  },
  {
    name: 'Dataset-2',
    description: 'A short description of dataset-2',
  },
  {
    name: 'Dataset-3',
    description: 'A short description of dataset-3',
  },
  {
    name: 'Dataset-4',
    description: 'A short description of dataset-4',
  },
]

const DatasetList = () => (
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
