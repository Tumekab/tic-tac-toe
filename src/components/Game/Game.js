import React, { useState } from 'react';
import './Game.css';

import { Board } from '../Board/Board';
import { Results } from '../Results/Results';
import { calculateWinner } from '../../utilities/WinnerCalculater';

export const Game = () => { 

    //create local states
    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);
    const [xIsNext, setXIsNext] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    const [numberOfTurnsLeft, setNumberOfTurnsLeft] = useState(9);
    const [winner, setWinner] = useState();
    const [winningCombination, setWinningCombination] = useState([]);
    
    //helps to keep populated cells from being toggled again
    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

    const restartGame = () => {

        setCellValues(['', '', '', '', '', '', '', '', '']);
        setXIsNext(true);
        setIsGameOver(false);
        setNumberOfTurnsLeft(9);
        setWinner(undefined);
        setWinningCombination([]);
    }

    //creating a clicked event and using the cell value and create a new array
    //creates turns using bang operator to switch from X to O
    // X will always go first
    //if statement stops the toggle happening once a cell has been populated
    const onCellClicked = (cellIndex) => {
        if (isCellEmpty(cellIndex)) {
            const newCellValues = [...cellValues];

            newCellValues[cellIndex] = xIsNext ? 'X' : 'O';

            const newNumberOfTurnsLeft = numberOfTurnsLeft - 1;

            //calculate the result
            const calcResult = calculateWinner(newCellValues, newNumberOfTurnsLeft, cellIndex);
            
            setCellValues(newCellValues);
            setXIsNext(!xIsNext);
            setIsGameOver(calcResult.hasResult);
            setNumberOfTurnsLeft(newNumberOfTurnsLeft);
            setWinner(calcResult.winner);
            setWinningCombination(calcResult.winningCombination);
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
        <Results 
            isGameOver={ isGameOver }
            winner={ winner }
            onNewGameClicked={ restartGame }
        />
    </>
  );
}