import React, { Component } from "react";
import { Link } from 'gatsby'
import "./hamburger.css";

class Hamburger extends Component {
    container = React.createRef();
    state = {
        open: false,
    };

    handleHamburgerClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };

    render() {
        return (
            <div className="container1" ref={this.container}>
                <button type="button" className="buttonHam" onClick={this.handleHamburgerClick}>
                    ☰
                </button>
                {this.state.open && (
                    <div className="container">
                        <p className="links"><Link to="/app/signup">Register</Link></p>
                        <p className="links"><Link to="/app/login">Login</Link></p>
                        <p className="links"><Link to="/app/about">About</Link></p>
                        <p className="links"><Link to="/app/profile">Profile</Link></p>
                        <p className="links">Data source references</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Hamburger;