import React from 'react';
import './Board.css';

import { Cell } from '../Cell/Cell'

export const Board = () => {
  return (
    <div id="board">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
    </div>
  );
}