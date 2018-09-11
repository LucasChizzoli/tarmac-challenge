import React, { Component } from 'react';
import './Grid.css';
import Cell from '../cell/Cell';
import tarmacTeam from '../../tarmac-people.json';

class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cells: tarmacTeam || []
    };
  }

  getTarmacTeam = () => {
    return this.state.cells.map((c, i) => <Cell key={i} member={c} id={i} />);
  };

  render() {
    return (
      <div className="grid-wrapper">
        {this.getTarmacTeam()}
      </div>
    );
  };
}

export default Grid;