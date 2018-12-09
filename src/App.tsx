import React, { Component } from 'react'
import './App.css'
import TrackPage from './components/TrackPage'
import AnalyzePage from './components/AnalyzePage'
import Header from './components/Header'
import LoginPage from './components/LoginPage'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)

store.subscribe(() => {
  console.log(store.getState())
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Header/>

            <div className="container">
              <div className="body">
                  <Switch>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/track" component={TrackPage}/>
                    <Route path="/analyze" component={AnalyzePage}/>
                  </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
