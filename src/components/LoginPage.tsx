import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <h2>Please login</h2>

                <form>
                    <div className="form-group">
                        <label htmlFor="LoginForm_EmailInput">Email address</label>
                        <input id="LoginForm_EmailInput" type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="LoginForm_PasswordInput">Password</label>
                        <input id="LoginForm_PasswordInput" type="password" className="form-control" />
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
