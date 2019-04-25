import React, { Component } from "react";
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
            <div className="container" ref={this.container}>
                <button type="button" className="button" onClick={this.handleHamburgerClick}>
                    ☰
                </button>
                {this.state.open && (
                    <div className="container">
                        <ul>
                            <li>Register</li>
                            <li>Login</li>
                            <li>About</li>
                            <li>Data source references</li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Hamburger;