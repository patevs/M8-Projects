
/*
  src/App.js
  root app component
*/

// imports
import React, { Component } from 'react';

// M8S Landing Page
import Landing from './Landing';

// app styles
import './App.css';

// App component class
class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
