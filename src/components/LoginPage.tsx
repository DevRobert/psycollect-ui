import React, { Component } from 'react';

interface LoginProps {
    login: (email: string, password: string) => void,
    info: string,
    error: string
}

class LoginPage extends Component<LoginProps> {
    private email = ""
    private password = ""

    private submit() {
        this.props.login(this.email, this.password)
    }

    render() {
        return (
            <div>
                <h2>Please login</h2>

                {this.props.info && (
                    <div className="alert alert-info">{this.props.info}</div>
                )}

                {this.props.error && (
                    <div className="alert alert-danger">{this.props.error}</div>
                )}

                <form onSubmit={ e => { e.preventDefault(); this.submit(); }}>
                    <div className="form-group">
                        <label htmlFor="LoginForm_EmailInput">Email address</label>
                        <input id="LoginForm_EmailInput" type="text" className="form-control" onChange={e => { this.email = e.target.value}} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="LoginForm_PasswordInput">Password</label>
                        <input id="LoginForm_PasswordInput" type="password" className="form-control" onChange={e => { this.password = e.target.value}} />
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="RememberInput" />
                        <label className="form-check-label" htmlFor="RememberInput">Remember me</label>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

export default LoginPage
