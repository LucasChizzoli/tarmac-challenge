import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PICTURE_URL } from '../../endpoints';
import imageNotFound from '../../imageNotFound.jpg';
import './Cell.css';

const Cell = (props) => {
  const { member, id } = props;
  return (
    <div className="cell-wrapper">
      <Link className="nav-item" to={`member/${id}`}>
        <div className="cell-over-name">{member.name}</div>
        <img alt={member.pic} src={`${PICTURE_URL}${member.pic}.png`} className="cell-image" onError={(e) => { e.target.src = imageNotFound }} />
      </Link>
    </div>
  )
};

Cell.propTypes = {
  member: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default Cell;