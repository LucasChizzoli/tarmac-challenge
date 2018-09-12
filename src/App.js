import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './components/routing/Routing';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
