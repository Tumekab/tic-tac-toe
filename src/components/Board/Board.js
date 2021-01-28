import React from 'react';
import './Board.css';

import { Cell } from '../Cell/Cell'

export const Board = () => {

    //create a const with array 
    const cellValues = ['X', 'X', 'X', 'O', 'O', 'X', 'O', '', ''];
    //map over the cells
    const cells = cellValues.map((value, index) =>
    <Cell key={ index } value={ value } canHighlight={ false } />
    );


  return (
    <div id="board">
        { cells }
    </div>
  );
}