import React from 'react'
import { Collapse } from 'react-bootstrap'

import LeafletMap from './LeafletMap'
import CulturalInstitutions from './CulturalInstitutions'

const Plots = props => {
  return (
    <>
      {[CulturalInstitutions, LeafletMap, LeafletMap, LeafletMap].map(
        (Component, index) => (
          <Collapse
            in={props.datasets[index].active}
            key={index}
            timeout={0}
            onEntered={e => (e.style.height = '100%')}
          >
            <Component {...props} />
          </Collapse>
        )
      )}
    </>
  )
}

export default Plots
