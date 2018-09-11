import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './NumberOfCellsPerRow.css';
import tarmacTeam from './tarmac-people.json';
import Routing from './components/routing/Routing';

class App extends Component {
  render() {
    console.log(tarmacTeam);
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
