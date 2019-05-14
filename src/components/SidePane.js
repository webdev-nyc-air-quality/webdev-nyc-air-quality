import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import styles from './SidePane.css'

class SidePane extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      key: 'list',
    }
  }

  render () {
    return (
      <Tabs
        id='controlled-tab-example'
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
        transition={false}
        className={styles.navTabs}
      >
        <Tab eventKey='settings' title='⚙️'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          aliquam rutrum ipsum, eu fringilla elit malesuada sit amet. Aenean
          velit metus, mollis id velit nec, aliquam sodales est. Nam dui orci,
          suscipit non fringilla sit amet, condimentum sed turpis. Nulla
          facilisi. Morbi vitae velit sem. Curabitur eleifend ligula quis sem
          mollis pretium. In vestibulum nisi nunc. Nam rutrum sodales ipsum, id
          placerat ligula mattis non. Maecenas vitae ultricies tortor. Nam vitae
          faucibus sem. Pellentesque mollis a dolor non suscipit. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Praesent faucibus
          metus sit amet urna iaculis, a egestas dolor ultricies. Nulla eleifend
          posuere ipsum, non auctor libero tempus eget. Suspendisse dignissim
          arcu vel gravida ultricies.
        </Tab>
        <Tab eventKey='list' title='List'>
          Nulla urna sapien, hendrerit sit amet risus in, facilisis pharetra
          erat. Suspendisse imperdiet dui vel pharetra facilisis. Mauris
          malesuada, quam sed vehicula accumsan, arcu justo congue dolor, non
          tempus eros augue eu arcu. Sed quis massa at metus consequat feugiat
          eu vel lorem. Proin imperdiet libero sed ipsum finibus, in congue
          neque fringilla. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Nam eu erat sed mi tincidunt
          rhoncus. Vivamus facilisis, erat eget iaculis congue, est odio viverra
          sapien, vel feugiat est risus ac mauris. Nunc eu mauris imperdiet nibh
          malesuada sagittis. Duis luctus vehicula nisi. Sed a est efficitur,
          imperdiet mauris et, tempor lacus.
        </Tab>
        <Tab eventKey='discuss' title='Discuss'>
          Vestibulum semper nec sem eget scelerisque. Morbi sem lorem, dictum
          non felis quis, condimentum congue sapien. Praesent eu feugiat metus,
          eget molestie purus. Duis varius ligula nibh, non bibendum dui
          hendrerit at. Nam gravida venenatis erat lacinia dictum. Praesent
          vehicula enim quis euismod ullamcorper. Vestibulum nulla mauris,
          eleifend et lacus et, pharetra venenatis orci. Nulla arcu nulla,
          commodo id odio efficitur, blandit rutrum urna. Sed blandit enim
          venenatis, malesuada quam eget, pulvinar risus. Phasellus vestibulum
          facilisis augue, ut imperdiet risus ullamcorper a. Proin mattis eros
          mauris, sed mattis tortor posuere eget. Pellentesque eget mi
          efficitur, vulputate quam vitae, cursus lacus. Nulla facilisi.
        </Tab>
      </Tabs>
    )
  }
}

export default SidePane
