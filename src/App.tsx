import React, { Component } from 'react';
import './App.css';
import TrackPage from './components/TrackPage';
import AnalyzePage from './components/AnalyzePage';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>

        <div className="container">
          <div className="body">
            <TrackPage/>
            <AnalyzePage/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
