import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavListItem from './NavListItem';

interface HeaderProps {
    loggedIn: boolean
}

class Header extends Component<HeaderProps> {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">PsyCollect</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        { this.props.loggedIn && <NavListItem to="/track">Track</NavListItem> }
                        { this.props.loggedIn && <NavListItem to="/analyze">Analyze</NavListItem> }
                        { this.props.loggedIn && <NavListItem to="/goals">Goals</NavListItem> }
                        { this.props.loggedIn && <NavListItem to="/account">Account</NavListItem> }

                        { !this.props.loggedIn && <NavListItem to="/login">Login</NavListItem> }
                        { this.props.loggedIn && <NavListItem to="/logout">Logout</NavListItem> }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header
