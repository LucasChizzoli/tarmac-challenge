import React, { Component } from 'react';
import './App.css';
import './NumberOfCellsPerRow.css';
import Grid from './components/grid/Grid';
import tarmacTeam from './tarmac-people.json';

class App extends Component {
  render() {
    console.log(tarmacTeam);
    return (
      <div className="app">
        <Grid cells={tarmacTeam}/>
      </div>
    );
  }
}

export default App;
