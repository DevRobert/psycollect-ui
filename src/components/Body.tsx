import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter, RouteComponentProps } from 'react-router';
import LoginContainer from '../containers/LoginContainer';
import TrackContainer from '../containers/TrackContainer';
import AccountPage from './AccountPage';
import LogoutContainer from '../containers/LogoutContainer';
import AnalyzeContainer from '../containers/AnalyzeContainer';

interface HeaderProps extends RouteComponentProps {
    loggedIn: boolean
}

class Body extends Component<HeaderProps> {
    render() {
        return (
            <div className="container">
              <div className="body">
                  <Switch>
                    { /* Guest */ }
                    { !this.props.loggedIn && <Route path="/login" component={LoginContainer}/> }
                    
                    { /* Authenticated User */ }
                    { this.props.loggedIn && <Route path="/track" component={TrackContainer}/> }
                    { this.props.loggedIn && <Route path="/analyze" component={AnalyzeContainer}/> }
                    { this.props.loggedIn && <Route path="/account" component={AccountPage}/> }
                    { this.props.loggedIn && <Route path="/logout" component={LogoutContainer}/> }

                    <Redirect from="*" to={this.props.loggedIn ? "/track" : "/login"}/>
                  </Switch>
              </div>
            </div>
        )
    }
}

export default withRouter(Body)
