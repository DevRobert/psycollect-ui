import React, { Component } from 'react';

interface LogoutProps {
    logout: () => void
}

class LogoutPage extends Component<LogoutProps> {
    componentDidMount() {
        this.props.logout()
    }

    render() {
        return (
            <div>Logout page</div>
        )
    }
}

export default LogoutPage
