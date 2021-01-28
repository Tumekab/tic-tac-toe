import React, { useState } from 'react';
import './Game.css';

import { Board } from '../Board/Board';

export const Game = () => { 

    //create a local state with array using hooks
    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);
    const [xIsNext, setXIsNext] = useState(true);

    const winningCombination = [];
    
    //helps to keep populated cells from being toggled again
    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

    //creating a clicked event and using the cell value and create a new array
    //creates turns using band operator to switch from X to O
    // X will always go first
    //if statement stops the toggle happening once a cell has been populated
    const onCellClicked = (cellIndex) => {
        if (isCellEmpty(cellIndex)) {
            const newCellValues = [...cellValues];

            newCellValues[cellIndex] = xIsNext ? 'X' : 'O';
            setCellValues(newCellValues);
            setXIsNext(!xIsNext);
        }
    };

  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board 
            cellValues={ cellValues } 
            winningCombination={ winningCombination}
            onCellClicked={ onCellClicked }
        />
    </div>

    <div id="modal-overlay">
        <div id="game-result-modal">
            <div id="result-container">
                <div id="winner-container">
                    <span></span>
                </div>
            </div>
            <div id="new-game-container">
                <button id="new-game-button">Start New Game</button>
            </div>
        </div>
    </div>
  </>
  );
}