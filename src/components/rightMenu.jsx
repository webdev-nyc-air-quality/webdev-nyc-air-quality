import React, { Component } from 'react'
import './rightMenu.css'
import Tab from './Tab'

class rightMenu extends Component {
  state = {
    tabs: [
      { id: '0', title: 'Setting⚙️', click: false, conten: 'set' },
      { id: '1', title: 'List', click: false, content: 'list' },
      { id: '2', title: 'Discussion', click: false, content: 'discuss' },
    ],
    // other states if needed
  }

  showTabHandler = (id) => {
    let tabs = [...this.state.tabs];
    let showTabIndex = tabs.findIndex((t) => t.id === id);
    let tab = {...this.state.tabs[showTabIndex]};

    if (tab.click) {
      // do nothing
    } else {
      tabs.forEach(function(t) {
        if (t.id !== id) {
          t.click = false
        }
      });
      tab.click = true;

      tabs[showTabIndex] = tab;
      
      this.setState({ tabs: tabs });
    }
  }

  render() {
    return (
      <div className="menuContainer">
        <div className="tabMenu">
          <Tab
            click={this.showTabHandler(this.state.tabs[0])}
            key={this.state.tabs[0].id}
            title={this.state.tabs[0].title}
            content={this.state.tabs[0].content}
          />
          <Tab
            click={this.showTabHandler(this.state.tabs[1])}
            key={this.state.tabs[1].id}
            title={this.state.tabs[1].title}
            content={this.state.tabs[1].content}
          />
          <Tab
            click={this.showTabHandler(this.state.tabs[2])}
            key={this.state.tabs[2].id}
            title={this.state.tabs[2].title}
            content={this.state.tabs[2].content}
          />
          {/* <button className="tabMenuItem" onClick={this.showTabHandler}>⚙️</button>
                    <button className="tabMenuItem" onClick={this.showTabHandler}>List</button>
                    <button className="tabMenuItem" onClick={this.showTabHandler}>Discuss</button> */}
        </div>

        <div className="tabContent">
          <div className="tabSetting" id="set">
            Settings
          </div>
          <div className="tabList" id="list">
            <p>Air Quality</p>
            <p>Health Incidents</p>
            <p>Cultural Sites</p>
            <p>Vehicle Idlling Complaints</p>
            <p>Vehicle Collisions</p>
          </div>

          <div className="tabDiscuss" id="discuss">
            <div>
              <h5>Comments</h5>
              <div className="discussContainer">
                <img src="" alt="Image" />
                <p>Comments</p>
                <span>mm/dd/yy</span>
              </div>
              <div className="discussContainer">
                <img src="" alt="Image" />
                <p>Comments</p>
                <span>mm/dd/yy</span>
              </div>
            </div>
            <div>
              <h5>Requests</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default rightMenu
