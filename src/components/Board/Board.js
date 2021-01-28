import React from 'react';
import './Board.css';

import { Cell } from '../Cell/Cell'

export const Board = () => {
  return (
    <div id="board">
        <Cell value="X" />
        <Cell value="X" />
        <Cell value="X" />
        <Cell value="O" />
        <Cell value="X" />
        <Cell value="" />
        <Cell value="O" />
        <Cell value="X" />
        <Cell value="X" />
    </div>
  );
}