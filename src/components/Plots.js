import React from 'react'
import { Collapse } from 'react-bootstrap'

import LeafletMap from './LeafletMap'
import CulturalInstitutions from './CulturalInstitutions'

const Plots = ({ indexQueryData, datasets }) => {
  return (
    <>
      {[CulturalInstitutions, LeafletMap, LeafletMap, LeafletMap].map(
        (Component, index) => (
          <Collapse
            in={datasets[index].active}
            key={index}
            timeout={0}
            onEntered={e => (e.style.height = '100%')}
          >
            <Component
              indexQueryData={indexQueryData}
              dataset={datasets[index]}
            />
          </Collapse>
        )
      )}
    </>
  )
}

export default Plots
