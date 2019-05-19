import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import DatasetList from './DatasetList'
import styles from './SidePane.css'

const SidePane = props => (
  <Tabs
    id='controlled-tab-example'
    activeKey={props.activeTab}
    onSelect={props.setActiveTab}
    transition={false}
    className={styles.navTabs}
  >
    <Tab eventKey='settings' title='⚙️'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquam
      rutrum ipsum, eu fringilla elit malesuada sit amet. Aenean velit metus,
      mollis id velit nec, aliquam sodales est. Nam dui orci, suscipit non
      fringilla sit amet, condimentum sed turpis. Nulla facilisi. Morbi vitae
      velit sem. Curabitur eleifend ligula quis sem mollis pretium. In
      vestibulum nisi nunc. Nam rutrum sodales ipsum, id placerat ligula mattis
      non. Maecenas vitae ultricies tortor. Nam vitae faucibus sem. Pellentesque
      mollis a dolor non suscipit. Interdum et malesuada fames ac ante ipsum
      primis in faucibus. Praesent faucibus metus sit amet urna iaculis, a
      egestas dolor ultricies. Nulla eleifend posuere ipsum, non auctor libero
      tempus eget. Suspendisse dignissim arcu vel gravida ultricies.
    </Tab>
    <Tab eventKey='list' title='List'>
      <DatasetList
        datasets={props.datasets}
        activeDatasetIndex={props.activeDatasetIndex}
        setActiveDataset={props.setActiveDataset}
      />
    </Tab>
    <Tab eventKey='discuss' title='Discuss'>
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
