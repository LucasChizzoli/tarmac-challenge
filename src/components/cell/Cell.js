 import React from 'react';
 import { PICTURE_URL } from '../../endpoints';
 import './Cell.css';

 const Cell = ({member}) => {
  return (
    <div className="cell-wrapper">
      <img alt={member.pic} src={`${PICTURE_URL}${member.pic}.png`} className="cell-image"/>
    </div>
  )
 };

 export default Cell;