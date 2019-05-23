import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import GeocodeForm from './GeocodeForm'
import DatasetList from './DatasetList'
import styles from './SidePane.css'
import CommentList from './CommentList'

const SidePane = props => (
  <Tabs
    id='controlled-tab-example'
    activeKey={props.activeTab}
    onSelect={props.setActiveTab}
    transition={false}
    className={styles.navTabs}
  >
    <Tab eventKey='settings' title='⚙️'>
      <GeocodeForm
        handleAddressInputChange={props.handleAddressInputChange}
        handleAddressSubmit={props.handleAddressSubmit}
        addressInput={props.datasets[props.activeDatasetIndex].addressInput}
        outputLocation={
          props.datasets[props.activeDatasetIndex].mapOptions.center
        }
      />
    </Tab>
    <Tab eventKey='list' title='List'>
      <DatasetList
        datasets={props.datasets}
        activeDatasetIndex={props.activeDatasetIndex}
        setActiveDataset={props.setActiveDataset}
      />
    </Tab>
    <Tab eventKey='discuss' title='Discuss'>
      <CommentList />
    </Tab>
  </Tabs>
)

export default SidePane
