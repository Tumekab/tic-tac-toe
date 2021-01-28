import React from 'react';
import './Board.css';

import { Cell } from '../Cell/Cell'

export const Board = (props) => {

    //map over the cells
    const cells = props.cellValues.map((value, index) => {
        const canHighlight = props.winningCombination && props.winningCombination.indexOf(index) >= 0;

        return <Cell 
                key={ index } 
                value={ value } 
                canHighlight={ canHighlight }
                onClick={() => props.onCellClicked(index)}
                />
    });


  return (
    <div id="board">
        { cells }
    </div>
  );
}