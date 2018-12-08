import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">PsyCollect</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Daily report</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Analyze</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header
