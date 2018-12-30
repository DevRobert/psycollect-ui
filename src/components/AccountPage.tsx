import React, { Component } from 'react';

interface AccountPageProps {
    email: string,
    admin: boolean
}

class AccountPage extends Component<AccountPageProps> {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="text" readOnly className="form-control-plaintext" value={this.props.email} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" readOnly className="form-control-plaintext" value="------" />
                        </div>
                    </div>
                    { this.props.admin && 
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">User group</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" value="Administrators" />
                            </div>
                        </div>
                    }
                </form>
            </div>
        )
    }
}

export default AccountPage
