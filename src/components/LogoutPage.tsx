import React, { Component } from 'react';
import { deleteTokenFromCookie } from '../model/TokenCookieStore';

interface LogoutProps {
    logout: () => void
}

class LogoutPage extends Component<LogoutProps> {
    componentDidMount() {
        deleteTokenFromCookie()
        this.props.logout()
    }

    render() {
        return (
            <div>Logout page</div>
        )
    }
}

export default LogoutPage
