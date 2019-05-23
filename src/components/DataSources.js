import React from 'react'
import Helmet from 'react-helmet'
import { Card, Col, Row } from 'react-bootstrap'

const DataSources = () => (
  <Row style={styles.container}>
    <Col>
      <Helmet title='Data sources' />
      <h1>Data sources</h1>
      {sources.map(({ name, organization, description, link }, index) => (
        <Card key={index} bg='light' style={styles.card}>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className='text-muted'>{organization}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Card.Link href={link}>Dataset link</Card.Link>
        </Card>
      ))}
    </Col>
  </Row>
)

const sources = [
  {
    name: 'Culturual institutions by block and lot',
    organization: 'NYC Open Data',
    description:
      'Contains the names and locations of 71 sites of cultural significance. Note: for some reason this dataset was taken offline after we downloaded it. The link below used to work.',
    link:
      'https://data.cityofnewyork.us/Recreation/Cultural-Institutions-by-block-and-lot/733r-da8r',
  },
  {
    name: 'Vehicle idling complaints FY2014 to present',
    organization: 'NYC Open Data, 311 service calls',
    description:
      'Contains locations and categories of vehicle idling complaints.',
    link:
      'https://data.cityofnewyork.us/Social-Services/Vehicle-Idling-Complaints-FY2014-to-present-/efmu-f9f7/',
  },
  {
    name: 'Neighborhood tabular areas',
    organization: 'NYC Open Data, NYC Department of City Planning',
    description:
      'Contains GIS polygons of the 195 tabulation areas from the 2010 Census.',
    link:
      'https://data.cityofnewyork.us/City-Government/Neighborhood-Tabulation-Areas/cpf4-rkhq',
  },
  {
    name: 'NYCCAS air pollution rasters',
    organization: 'NYC Open Data, NYC Community Air Survey',
    description:
      'Contains GIS rasters of several air pollutants collected biannually, at over 100 locations.',
    link:
      'https://data.cityofnewyork.us/Environment/NYCCAS-Air-Pollution-Rasters/q68s-8qxv',
  },
]

const styles = {
  container: {
    width: '80%',
    margin: '1rem auto',
    border: '1px solid lightgray',
    borderRadius: '5px',
    padding: '0.5rem',
  },
  card: {
    margin: '1rem 0 0',
    padding: '1rem',
  },
}

export default DataSources
