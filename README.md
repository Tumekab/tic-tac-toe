# Tic-Tac-Toe - MVP
This is a project I built in React, to experiment with css gradients to create glass effects on elements. It also helped me to better understand javascript conditional algorithms as well as getting practice using Hooks in React. You can play the game [here](https://tumekab.github.io/tic-tac-toe/).

## Features
Each player takes a turn, X will always go first.\
Once someone has won you will see a winner message.\
There can also be ties.\
You can restart the game as many times as you want.

## Matrix System
This game uses a matrix cell index system to determine all the possible winning combinations

``` 
const winningMatrix = {
    0: [[1,2],[3,6],[4,8]],
    1: [[0,2],[4,7]],
    2: [[0,1],[5,8],[4,6]],
    3: [[0,6],[4,5]],
    4: [[2,6],[3,5],[1,7],[0,8]],
    5: [[3,4],[2,8]],
    6: [[7,8],[0,3],[2,4]],
    7: [[6,8],[1,4]],
    8: [[6,7],[2,5],[0,4]]
}; 
```
It is then looped through so that it knows once a winning combination has been met the game finishes
```
for(let i = 0; i < winningRanges.length; i++){
        const currentValue = cellValues[cellIndex];
        const firstOption = cellValues[winningRanges[i][0]];
        const secondOption = cellValues[winningRanges[i][1]];

        if(currentValue === firstOption && firstOption === secondOption) {
            return {
                hasResult: true,
                winner: currentValue,
                winningCombination: [cellIndex, winningRanges[i][0], winningRanges[i][1]]
            }
        }
    }
    
  ```
  
## Potential Future Features
Keeping track of which round players are on.\
Player 1 and Player 2 scoring to keep track of.\
Message indicator to let you know who's turn it is.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
