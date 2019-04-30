import React, { Component } from 'react';
import './rightMenu.css';
import Tab from './Tab';

class rightMenu extends Component {
  state = {
    tabs: [
      { id: '0', title: 'Setting⚙️', content: 'set' },
      { id: '1', title: 'List', content: 'list' },
      { id: '2', title: 'Discussion', content: 'discuss' },
    ]
    // other states if needed
  };

  showTabHandler = (id) => {
    // get all the tabs in state
    let tabs = [...this.state.tabs];
    // get the clicked tab index
    let showTabIndex = tabs.findIndex((t) => t.id === id);
    // get the clicked tab by showTabIndex
    let tab = {...this.state.tabs[showTabIndex]};

    // if the tab is already open then do nothing
    if (tab.click === 'true') {
      // do nothing
      //console.log(tab.click);
    } else { // else clicked tab.click = true; other tabs are false
      tab.click = 'true';

      tabs.forEach(function(t) {
        if (t.id !== id) {
          t.click = 'false';
        };
      });
      
      tabs[showTabIndex] = tab;
      console.log(tabs);
      
      this.setState({ tabs: tabs });
    }
  }

  render() {
    let tabs = null;

    tabs = (
      <div>
        {this.state.tabs.map((tab, index) => {
          return <Tab 
            key={tab.id}
            title={tab.title}
            click={this.showTabHandler(index)}
            content={tab.content}
            />
        })}
      </div>
    );

    return (
      <div className="menuContainer">
        {tabs}
      </div>
    );
  }
}

export default rightMenu;