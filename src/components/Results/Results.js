import React from 'react';
import classNames from 'classnames';
import './Results.css';

export const Results = (props) => {

    const resultClasses = classNames({
        'modal-open': props.isGameOver
    })

    return (
        <div id="modal-overlay" className={ resultClasses }>
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
    );
}