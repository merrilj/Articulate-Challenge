import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <div style={itemStyle}>
    <Link to="/">Back to dashboard</Link>
    <h3>Item {props.match.params.itemId}</h3>
  </div>
)

const itemStyle = {
  padding: '2rem'
}