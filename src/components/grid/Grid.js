import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Grid.css';
import Cell from '../cell/Cell';

class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cells: props.cells || []
    };
  }

  getTarmacTeam = () => {
    return this.state.cells.map((c, i) => <Cell key={i} member={c} />);
  };

  render() {
    return (
      <div className="grid-wrapper">
        {this.getTarmacTeam()}
      </div>
    );
  };
}

Grid.propTypes = {
  cells: PropTypes.array.isRequired
};

export default Grid;