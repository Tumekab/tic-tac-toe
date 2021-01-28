import React from 'react';
import './Game.css';

import { Board } from '../Board/Board';

export const Game = () => { 
    //create a const with array 
    const cellValues = ['', '', '', '', '', '', '', '', ''];

    const winningCombination = [];

    const onCellClicked = (cellIndex) => {
        console.log(`Cell ${cellIndex} clicked.`);
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