import React from 'react';
import classNames from 'classnames';
import './Results.css';

export const Results = (props) => {

    const resultClasses = classNames({
        'modal-open': props.isGameOver
    })

    const message = props.winner ? `Winner is ${ props.winner }.` : 'It is a tie.';

    return (
        <div id="modal-overlay" className={ resultClasses }>
            <div id="game-result-modal">
                <div id="result-container">
                    <div id="winner-container">
                        <span>{ message }</span>
                    </div>
                </div>
            <div id="new-game-container">
                <button 
                    id="new-game-button"
                    onClick={ props.onNewGameClicked }>Start New Game</button>
            </div>
        </div>
    </div>
    );
}