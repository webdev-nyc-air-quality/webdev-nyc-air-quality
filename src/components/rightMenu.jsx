import React, { Component } from "react";
import "./rightMenu.css";

class rightMenu extends Component {
    handleItemClick = () => {

    }

    render() {
        return (
            <div className="menuContainer">
                <div className="tabMenu">
                    <button className="tabMenuItem">⚙️</button>
                    <button className="tabMenuItem">List</button>
                    <button className="tabMenuItem">Discuss</button>
                </div>

                <div className="tabContent">
                    <div className="tabList">
                        <p>Air Quality</p>
                        <p>Health Incidents</p>
                        <p>Cultural Sites</p>
                        <p>Vehicle Idlling Complaints</p>
                        <p>Vehicle Collisions</p>
                    </div>
                </div>
            </div>
        )
    }
} 

export default rightMenu;