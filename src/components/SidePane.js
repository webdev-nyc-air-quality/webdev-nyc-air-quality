import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import GeocodeForm from './GeocodeForm'
import DatasetList from './DatasetList'
import styles from './SidePane.css'
import CommentForm from './commentForm'

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
      <CommentForm />
      Vestibulum semper nec sem eget scelerisque. Morbi sem lorem, dictum non
      felis quis, condimentum congue sapien. Praesent eu feugiat metus, eget
      molestie purus. Duis varius ligula nibh, non bibendum dui hendrerit at.
      Nam gravida venenatis erat lacinia dictum. Praesent vehicula enim quis
      euismod ullamcorper. Vestibulum nulla mauris, eleifend et lacus et,
      pharetra venenatis orci. Nulla arcu nulla, commodo id odio efficitur,
      blandit rutrum urna. Sed blandit enim venenatis, malesuada quam eget,
      pulvinar risus. Phasellus vestibulum facilisis augue, ut imperdiet risus
      ullamcorper a. Proin mattis eros mauris, sed mattis tortor posuere eget.
      Pellentesque eget mi efficitur, vulputate quam vitae, cursus lacus. Nulla
      facilisi.
    </Tab>
  </Tabs>
)

export default SidePane
