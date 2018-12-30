import React, { Component } from 'react';
import { readEmailFromCookie, writeEmailToCookie, deleteEmailFromCookie } from '../model/CookieStore';

interface LoginProps {
    login: (email: string, password: string) => void,
    info: string,
    error: string
}

interface LoginState {
    email: string,
    password: string,
    remember: boolean
}

class LoginPage extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props)

        const email = readEmailFromCookie()

        this.state = {
            email,
            password: "",
            remember: !!email
        }
    }

    private submit() {
        if(this.state.remember) {
            writeEmailToCookie(this.state.email)
        }
        else {
            deleteEmailFromCookie()
        }

        this.props.login(this.state.email, this.state.password)
    }

    private handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: e.target.value
        })
    }

    private handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: e.target.value
        })
    }

    private handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            remember: e.target.checked
        })
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
                        <input id="LoginForm_EmailInput" type="text" className="form-control" onChange={this.handleEmailChange} value={this.state.email} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="LoginForm_PasswordInput">Password</label>
                        <input id="LoginForm_PasswordInput" type="password" className="form-control" onChange={this.handlePasswordChange} />
                    </div>

                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="RememberInput" onChange={this.handleRememberChange} checked={this.state.remember} />
                        <label className="form-check-label" htmlFor="RememberInput">Remember me</label>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

export default LoginPage
