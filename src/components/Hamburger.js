import React, { Component }  from 'react'
import { Link } from 'gatsby'
import "./style.css"

class Hamburger extends Component {
    state = {
        open: false,
    };

    hamburgerClickHandle = () => {
        this.setState({
            open: !this.state.open
        })
    };

    render() {
        return (
            <div className="HamburgerContainer">
                <button type="button" className="HamburgerButton" onClick={this.hamburgerClickHandle}>
                    ☰
                </button>
                {this.state.open && (
                    <div className="dropdownContainer">
                        <p className="dropdownItem">
                            <Link to="/app/signup">Register</Link>
                        </p>
                        <p className="dropdownItem">
                            <Link to="/app/login">Login</Link>
                        </p>
                        <p className="dropdownItem">
                            <Link to="/app/home">About</Link>
                        </p>
                        <p className="dropdownItem">
                            <Link to="/app/profile">Profile</Link>
                        </p>
                        <p className="dropdownItem">
                            <Link to="">Data source references</Link>
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

export default Hamburger;