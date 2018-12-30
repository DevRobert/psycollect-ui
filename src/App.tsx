import React, { Component } from 'react'
import './App.css'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import Header from './components/Header'
import { readTokenFromCookie } from './model/CookieStore';
import { autoLogin } from './actions/Authentication';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)

const token = readTokenFromCookie()

if(token) {
  store.dispatch(autoLogin(token))
}

interface AppState {
  loggedIn: boolean
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props)

    this.state = {
      loggedIn: store.getState().login.loggedIn
    }

    store.subscribe(() => {
      this.setState({
        loggedIn: store.getState().login.loggedIn
      })
    })
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Header loggedIn={this.state.loggedIn}/>
            <Body loggedIn={this.state.loggedIn}/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
