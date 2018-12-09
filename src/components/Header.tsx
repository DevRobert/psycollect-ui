import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavListItem from './NavListItem';

class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">PsyCollect</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavListItem to="/track">Track</NavListItem>
                        <NavListItem to="/analyze">Analyze</NavListItem>
                        <NavListItem to="/account">Account</NavListItem>
                        <NavListItem to="/login">Login</NavListItem>
                        <NavListItem to="/logout">Logout</NavListItem>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header
