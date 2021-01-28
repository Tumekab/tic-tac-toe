import React from 'react';
import './Cell.css';


export const Cell = (props) => {
  return (
    <button className="cell">
        <span className="cell-content populated">{props.value}</span>
    </button>
  );
}

//only want populated class on when something is in the cell