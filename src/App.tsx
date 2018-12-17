import React, { Component } from 'react'
import './App.css'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)

store.subscribe(() => {
  console.log(store.getState())
})

interface AppState {
  loggedIn: boolean
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props)

    this.state = {
      loggedIn: false
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
