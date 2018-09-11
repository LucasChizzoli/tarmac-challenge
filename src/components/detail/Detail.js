import React from 'react';
import './Detail.css';
import { PICTURE_URL } from '../../endpoints';
import tarmacTeam from '../../tarmac-people.json';
import PropTypes from 'prop-types'; 
import imageNotFound from '../../imageNotFound.jpg';

const Detail = (props) => {
  const index = Number(props.match.params.id);
  const member = tarmacTeam[index];
  return (
    <div className="detail-wrapper">
      <img alt={member.pic} src={`${PICTURE_URL}${member.pic}.png`} className="detail-image" onError={(e)=>{e.target.src=imageNotFound}}/>
      <div className="info-wrapper">
        <h3 className="member-name">{member.name}</h3>
        <h4 className="member-role">{member.role}</h4> 
      </div>
    </div>
  )
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
}

export default Detail;